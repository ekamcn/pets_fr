import type {CartApiQueryFragment} from 'storefrontapi.generated';
import type {CartLayout} from '~/components/CartMain';
import {Money, type OptimisticCart} from '@shopify/hydrogen';
import {LuLoaderCircle} from 'react-icons/lu';
import {useEffect, useRef, useState} from 'react';
 
type Offer = {
  offerId: string;
  price: number | string;
};
const defaultPricingMatrix = {
  french: [
    { offerId: '49768', price: 9.99, currency: 'EUR' },
    { offerId: '49769', price: 19.5, currency: 'EUR' },
    { offerId: '49770', price: 29.9, currency: 'EUR' },
    { offerId: '49771', price: 39.99, currency: 'EUR' },
    { offerId: '49772', price: 49.9, currency: 'EUR' },
    { offerId: '49773', price: 59.5, currency: 'EUR' },
    { offerId: '49774', price: 69.99, currency: 'EUR' },
    { offerId: '49775', price: 79.9, currency: 'EUR' },
    { offerId: '49776', price: 89.5, currency: 'EUR' },
    { offerId: '49777', price: 99.99, currency: 'EUR' },
    { offerId: '49778', price: 109.9, currency: 'EUR' },
    { offerId: '49779', price: 119.5, currency: 'EUR' },
  ],
  english: [
    { offerId: '49804', price: 9.99, currency: 'USD' },
    { offerId: '49805', price: 19.5, currency: 'USD' },
    { offerId: '49806', price: 29.9, currency: 'USD' },
    { offerId: '49807', price: 39.99, currency: 'USD' },
    { offerId: '49808', price: 49.9, currency: 'USD' },
    { offerId: '49809', price: 59.5, currency: 'USD' },
    { offerId: '49810', price: 69.99, currency: 'USD' },
    { offerId: '49811', price: 79.9, currency: 'USD' },
    { offerId: '49812', price: 89.5, currency: 'USD' },
    { offerId: '49813', price: 99.99, currency: 'USD' },
    { offerId: '49814', price: 109.9, currency: 'USD' },
    { offerId: '49815', price: 119.5, currency: 'USD' },
  ],
};
 
const customOffers: Offer[] | null = import.meta.env.VITE_CUSTOM_OFFER_IDS
  ? (JSON.parse(import.meta.env.VITE_CUSTOM_OFFER_IDS) as Offer[])
  : null;

const pricingMatrix = customOffers && customOffers.length > 0
  ? {
      french: customOffers.map((offer: Offer) => ({
        offerId: offer.offerId,
        price: Number(offer.price),
        currency: 'EUR',
      })),
      english: customOffers.map((offer: Offer) => ({
        offerId: offer.offerId,
        price: Number(offer.price),
        currency: 'USD',
      })),
    }
  : defaultPricingMatrix;
 
console.log(pricingMatrix);
 
 
function getOfferId(
  price: number | string,
  locale: 'english' | 'french' = 'english',
): string {
  const matrix = pricingMatrix[locale] || pricingMatrix.english;
  const found = matrix.find(
    (item) => Number(item.price).toFixed(2) === Number(price).toFixed(2),
  );
  return found ? found.offerId : '';
}
 
type CartSummaryProps = {
  cart: OptimisticCart<CartApiQueryFragment | null>;
  layout: CartLayout;
  logoPath?: string;
  affId?: string;
};
 
export function CartSummary({cart, layout, affId}: CartSummaryProps) {
  const className = layout === 'page' ? 'cart-summary-page' : 'cart-summary-aside';
  const language = import.meta.env.VITE_LANGUAGE || 'english';
 
  // State to manage subtotal loader visibility
  const [showSubtotalLoader, setShowSubtotalLoader] = useState(false);
  const isWaitingForSubtotalRef = useRef<boolean>(false);
  const safetyTimeoutRef = useRef<number | null>(null);
  const prevLinesRef = useRef<string>('');
  const prevSubtotalRef = useRef<string>('');
 
  // Compute a unique identifier for cart lines to detect changes
  const lines = Array.isArray((cart?.lines as any)?.nodes)
    ? (cart?.lines as any).nodes
    : [];
  const cartLinesIdentifier = JSON.stringify(
    lines.map((line: any) => ({
      id: line.merchandise?.id,
      quantity: line.quantity,
    })),
  );
 
  // Trigger loader on cart lines change (e.g., + or - clicks, or add to cart)
  useEffect(() => {
    // Only trigger loader if lines have changed
    if (cartLinesIdentifier !== prevLinesRef.current) {
      setShowSubtotalLoader(true);
      isWaitingForSubtotalRef.current = true;
      prevSubtotalRef.current = String(cart.cost?.subtotalAmount?.amount ?? '');
 
      // Safety timeout to avoid an infinite spinner in edge cases
      if (safetyTimeoutRef.current) {
        window.clearTimeout(safetyTimeoutRef.current);
      }
      safetyTimeoutRef.current = window.setTimeout(() => {
        isWaitingForSubtotalRef.current = false;
        setShowSubtotalLoader(false);
      }, 10000);
    }
    // Update prevLinesRef for next comparison
    prevLinesRef.current = cartLinesIdentifier;
 
    // Cleanup on unmount or when cart lines change again
    return () => {
      if (safetyTimeoutRef.current) {
        window.clearTimeout(safetyTimeoutRef.current);
      }
    };
  }, [cartLinesIdentifier]);
 
  // Hide loader when subtotal actually changes after a lines change
  useEffect(() => {
    const currentSubtotal = String(cart.cost?.subtotalAmount?.amount ?? '');
    if (isWaitingForSubtotalRef.current) {
      if (currentSubtotal !== prevSubtotalRef.current) {
        isWaitingForSubtotalRef.current = false;
        setShowSubtotalLoader(false);
        if (safetyTimeoutRef.current) {
          window.clearTimeout(safetyTimeoutRef.current);
          safetyTimeoutRef.current = null;
        }
      }
    }
 
    return () => {
      // no-op
    };
  }, [cart.cost?.subtotalAmount?.amount]);
 
  return (
    <div aria-labelledby="cart-summary" className={className}>
      <dl className="cart-subtotal flex items-center justify-between">
        <dt>Total</dt>
        <dd className="flex items-center gap-2">
          {showSubtotalLoader ? (
            <LuLoaderCircle className="w-5 h-5 animate-spin" />
          ) : cart.cost?.subtotalAmount?.amount ? (
            <Money data={cart.cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </dd>
      </dl>
      <CartCheckoutActions
        cart={cart}
        logoPath={import.meta.env.VITE_SQUARE_LOGO}
        affId={affId}
        locale={language}
        isPriceUpdating={showSubtotalLoader}
      />
    </div>
  );
}
 
type CartCheckoutActionsProps = {
  cart: OptimisticCart<CartApiQueryFragment | null>;
  logoPath?: string;
  affId?: string;
  locale?: string;
  isPriceUpdating?: boolean;
};
 
function CartCheckoutActions({cart, logoPath, affId, locale, isPriceUpdating}: CartCheckoutActionsProps) {
  // Map short language codes to your pricingMatrix keys
  const langMap: Record<string, 'english' | 'french'> = {
    en: 'english',
    fr: 'french',
  };
 
  // Get language from env and normalize it
  const rawLang = import.meta.env.VITE_LANGUAGE || 'en';
  const normalizedLocale = langMap[rawLang.toLowerCase()] || 'english';
 
  // Get affiliate ID
  const defaultAffId = affId || 'AFF123';
  const finalAffId = encodeURIComponent(defaultAffId);
 
  // Get checkout domain and ID from env
  const checkoutBaseUrl = `${import.meta.env.VITE_CHECKOUT_DOMAIN}/${import.meta.env.VITE_CHECKOUT_ID}`;
 
  const lines = Array.isArray((cart?.lines as any)?.nodes)
    ? (cart?.lines as any).nodes
    : [];
 
  if (!lines.length) return null;
 
  const s2Arr: string[] = [];
  const s3Arr: string[] = [];
  const s4Arr: string[] = [];
 
  lines.forEach((line: any) => {
    const qty = line.quantity || 1;
    const image = line.merchandise?.image?.url || '';
    const title = line.merchandise?.product?.title || '';
    const price =
      line.cost?.amountPerQuantity?.amount || line.merchandise?.priceV2?.amount;
    const offerId = getOfferId(price, normalizedLocale);
 
    for (let i = 0; i < qty; i++) {
      s2Arr.push(image);
      s3Arr.push(title);
      s4Arr.push(offerId);
    }
  });
 
  const s2Param = encodeURIComponent(s2Arr.join(','));
  const s3Param = encodeURIComponent(s3Arr.join(','));
  const s4Param = encodeURIComponent(s4Arr.join(','));
  const l1Param = encodeURIComponent(import.meta.env.VITE_COMPANY_NAME);
  const l2Param = encodeURIComponent(import.meta.env.VITE_COMPANY_ADDRESS);
  const l3Param = encodeURIComponent(
    import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL,
  );
  const l4Param = encodeURIComponent(
    import.meta.env.VITE_CUSTOMER_SERVICE_PHONE,
  );
  const m1param = encodeURIComponent(`${window.location.origin}/shipping`);
 
  const gclid = (() => {
    const match = document.cookie.match(/(?:^|; )gclid=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : '';
  })();
 
  const [showSpinner, setShowSpinner] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const spinnerTimeoutRef = useRef<number | null>(null);
 
  function startSpinnerForOneSecond() {
    setShowSpinner(true);
    setIsDisabled(true);
    if (spinnerTimeoutRef.current) {
      window.clearTimeout(spinnerTimeoutRef.current);
    }
    spinnerTimeoutRef.current = window.setTimeout(() => {
      setShowSpinner(false);
      setIsDisabled(false);
      spinnerTimeoutRef.current = null;
    }, 2500);
  }
 
  useEffect(() => {
    // Disable button while price is updating
    setIsDisabled(isPriceUpdating || showSpinner);
  }, [isPriceUpdating, showSpinner]);
 
  useEffect(() => {
    return () => {
      if (spinnerTimeoutRef.current) {
        window.clearTimeout(spinnerTimeoutRef.current);
      }
    };
  }, []);
 
  const url = `${checkoutBaseUrl}?s1=${window.location.origin}/${import.meta.env.VITE_LOGO}&s2=${s2Param}&s3=${s3Param}&s4=${s4Param}&c1=custom1&c2=custom2&c3=custom3&c4=&c5=&c6=&affId=${finalAffId}&l1=${l1Param}&l2=${l2Param}&l3=${l3Param}&l4=${l4Param}&m1=${m1param}&m2=&gclId=${gclid}`;
 
  return (
    <div>
      <a href={url} target="_self">
        <button
          type="submit"
          onClick={() => {
            startSpinnerForOneSecond();
          }}
          disabled={isDisabled}
          className={`product-form__submit flex items-center justify-center gap-2 w-[100%] py-2 rounded-full text-lg font-bold transition-colors duration-200
            ${isDisabled ? "opacity-50 cursor-not-allowed" : "bg-[var(--color-1)] text-white"}`}
        >
          {showSpinner ? (
            <div className="w-full flex justify-center items-center">
              <LuLoaderCircle className="w-6 h-6 my-0.5 animate-spin" />
            </div>
          ) : (
            <span className="addbtntext">Continue to Checkout</span>
          )}
        </button>
      </a>
      <br />
    </div>
  );
}
 