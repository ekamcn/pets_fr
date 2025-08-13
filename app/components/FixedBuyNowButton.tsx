import {useState, useEffect, useRef} from 'react';
import {type FetcherWithComponents} from 'react-router';
import {CartForm} from '@shopify/hydrogen';
import {useAside} from './Aside';
import type {ProductFragment} from 'storefrontapi.generated';
 
export function FixedBuyNowButton({
  selectedVariant,
  analytics,
}: {
  selectedVariant: ProductFragment['selectedOrFirstAvailableVariant'];
  analytics?: unknown;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const {open} = useAside('header');
  const footerRef = useRef<HTMLElement | null>(null);
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  useEffect(() => {
    footerRef.current = document.querySelector('footer');
    if (!footerRef.current) return;
 
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      },
    );
 
    observer.observe(footerRef.current);
 
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);
 
  if (!isVisible || isFooterVisible) return null;
 
  const lines = selectedVariant
    ? [
        {
          merchandiseId: selectedVariant.id,
          quantity: 1,
          selectedVariant,
        },
      ]
    : [];
 
  return (
    <div className="fixed bottom-0 left-0 right-0 z-2 bg-white border-t border-gray-200 px-4 py-3 shadow-lg md:hidden">
      <CartForm
        route="/cart"
        inputs={{lines}}
        action={CartForm.ACTIONS.LinesAdd}
      >
        {(fetcher: FetcherWithComponents<any>) => (
          <>
            <input
              name="analytics"
              type="hidden"
              value={JSON.stringify(analytics)}
            />
            <div className="flex justify-center w-full">
              <button
                type="submit"
                onClick={() => open('cart')}
                disabled={
                  !selectedVariant?.availableForSale || fetcher.state !== 'idle'
                }
                className={`
                  w-full
                  px-4 sm:px-8 py-3 tracking-widest rounded-full text-white font-normal text-sm whitespace-nowrap transition-colors duration-200
                  ${
                    selectedVariant?.availableForSale &&
                    fetcher.state === 'idle'
                      ? 'bg-[var(--color-1)] hover:bg-[var(--color-1)]/90 cursor-pointer'
                      : 'bg-gray-400 cursor-not-allowed opacity-60'
                  }
                `}
              >
                {selectedVariant?.availableForSale ? 'Acheter maintenant' : 'Sold out'}
              </button>
            </div>
          </>
        )}
      </CartForm>
    </div>
  );
}
 
 