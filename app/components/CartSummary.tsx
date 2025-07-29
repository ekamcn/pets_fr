import type { CartApiQueryFragment } from 'storefrontapi.generated';
import type { CartLayout } from '~/components/CartMain';
import { Money, type OptimisticCart } from '@shopify/hydrogen';
import { CgLayoutGrid } from 'react-icons/cg';

// Pricing matrix for offerId lookup
const pricingMatrix = {
  french: [
    { offerId: '49768', price: 9.99, currency: 'EUR' },
    { offerId: '49769', price: 19.50, currency: 'EUR' },
    { offerId: '49770', price: 29.90, currency: 'EUR' },
    { offerId: '49771', price: 39.99, currency: 'EUR' },
    { offerId: '49772', price: 49.90, currency: 'EUR' },
    { offerId: '49773', price: 59.50, currency: 'EUR' },
    { offerId: '49774', price: 69.99, currency: 'EUR' },
    { offerId: '49775', price: 79.90, currency: 'EUR' },
    { offerId: '49776', price: 89.50, currency: 'EUR' },
    { offerId: '49777', price: 99.99, currency: 'EUR' },
    { offerId: '49778', price: 109.90, currency: 'EUR' },
    { offerId: '49779', price: 119.50, currency: 'EUR' },
  ],
  english: [
    { offerId: '49804', price: 9.99, currency: 'USD' },
    { offerId: '49805', price: 19.50, currency: 'USD' },
    { offerId: '49806', price: 29.90, currency: 'USD' },
    { offerId: '49807', price: 39.99, currency: 'USD' },
    { offerId: '49808', price: 49.90, currency: 'USD' },
    { offerId: '49809', price: 59.50, currency: 'USD' },
    { offerId: '49810', price: 69.99, currency: 'USD' },
    { offerId: '49811', price: 79.90, currency: 'USD' },
    { offerId: '49812', price: 89.50, currency: 'USD' },
    { offerId: '49813', price: 99.99, currency: 'USD' },
    { offerId: '49814', price: 109.90, currency: 'USD' },
    { offerId: '49815', price: 119.50, currency: 'USD' },
  ],
};

// Helper to get offerId for a product price (rounded to 2 decimals)
function getOfferId(price: number | string, locale: 'english' | 'french' = 'english'): string {
  const matrix = pricingMatrix[locale] || pricingMatrix.english;
  const found = matrix.find((item: { offerId: string; price: number }) => Number(item.price).toFixed(2) === Number(price).toFixed(2));
  return found ? found.offerId : '';
}

type CartSummaryProps = {
  cart: OptimisticCart<CartApiQueryFragment | null>;
  layout: CartLayout;
  logoUrl?: string;
  affId?: string;
  locale?: 'english' | 'french';
};

export function CartSummary({ cart, layout, logoUrl, affId, locale = 'english' }: CartSummaryProps) {
  const className =
    layout === 'page' ? 'cart-summary-page' : 'cart-summary-aside';
  return (
    <div aria-labelledby="cart-summary" className={className}>
      <dl className="cart-subtotal flex items-center justify-between">
        <dt>Total</dt>
        <dd>
          {cart.cost?.subtotalAmount?.amount ? (
            <Money data={cart.cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </dd>
      </dl>
      <CartCheckoutActions 
        cart={cart}
        logoUrl={logoUrl}
        affId={affId}
        locale={locale}
      />
    </div>
  );
}

type CartCheckoutActionsProps = {
  cart: OptimisticCart<CartApiQueryFragment | null>;
  logoUrl?: string;
  affId?: string;
  locale?: 'english' | 'french';
};

function CartCheckoutActions({ cart, logoUrl, affId, locale = 'english' }: CartCheckoutActionsProps) {
  // Defaults
  // const defaultLogo = 'https://deco-bay.com/cdn/shop/files/deco-bay-logo.png?v=1751353707&width=500&height=500&crop=center';
  const defaultLogo = 'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const defaultAffId = 'AFF123';
  const checkoutBaseUrl = locale === 'french'
    ? 'https://authorizepayment.com/CQ71FD'
    : 'https://authorizepayment.com/XBTMRCsr';

  // Gather product data
  const lines = Array.isArray((cart?.lines as any)?.nodes) ? (cart?.lines as any).nodes : [];
  if (!lines.length) return null;

  // Repeat image, title, and offerId for each quantity
  const s2Arr: string[] = [];
  const s3Arr: string[] = [];
  const s4Arr: string[] = [];
  lines.forEach((line: any) => {
    const qty = line.quantity || 1;
    const image = line.merchandise?.image?.url || '';
    const title = line.merchandise?.product?.title || '';
    const price = line.cost?.amountPerQuantity?.amount || line.merchandise?.priceV2?.amount;
    const offerId = getOfferId(price, locale);
    for (let i = 0; i < qty; i++) {
      s2Arr.push(image);
      s3Arr.push(title);
      s4Arr.push(offerId);
    }
  });
  const s2 = s2Arr.join(',');
  const s3 = s3Arr.join(',');
  const s4 = s4Arr.join(',');

  // s1: logo url with square dimensions
  const squareLogoUrl = logoUrl
    ? `${logoUrl}${logoUrl.includes('?') ? '&' : '?'}width=500&height=500&crop=center`
    : defaultLogo;
  const s1 = encodeURIComponent(squareLogoUrl);
  // s2, s3, s4: encodeURIComponent for each, then join with commas
  const s2Param = encodeURIComponent(s2);
  const s3Param = encodeURIComponent(s3);
  const s4Param = encodeURIComponent(s4);
  // affId
  const affIdParam = encodeURIComponent(affId || defaultAffId);

  // Construct URL
  const url = `${checkoutBaseUrl}?s1=${s1}&s2=${s2Param}&s3=${s3Param}&s4=${s4Param}&c1=custom1&c2=custom2&c3=custom3&c4=&c5=&c6=&affId=${affIdParam}`;

  return (
    <div>
      <a href={url} target="_self">
        <button
          type="submit"
          // onClick={() => { console.log('checkout') }}
          className={
            `product-form__submit  flex items-center justify-center gap-2 w-[100%] py-2 rounded-full  text-lg font-bold transition-colors duration-200 bg-[#9E8471] text-white`
          }
        >
          <span className="addbtntext">Continue to Checkout</span>
        </button>
      </a>
      <br />
    </div>
  );
}