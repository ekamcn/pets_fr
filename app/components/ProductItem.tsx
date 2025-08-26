import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import type {
  RecommendedProductFragment,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';
import {FaClock} from 'react-icons/fa';

const locale = import.meta.env.VITE_LANGUAGE;

// Define a generic product interface that matches the structure used across the app
interface ProductItemType {
  id: string;
  handle: string;
  title: string;
  featuredImage?: {
    id: string;
    altText?: string;
    url: string;
    width?: number;
    height?: number;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice?: {
      amount: string;
      currencyCode: string;
    };
  };
  __compareAtPrice?: {
    amount: string;
    currencyCode: string;
  };
}

function formatCurrency(amount: string, currencyCode: string) {
  const numAmount = parseFloat(amount);
  
  if (locale === 'fr') {
    // French format: 50 €
    return `${numAmount.toFixed(2)}\u00A0€`;
  } else {
    // American format: $50.00
    return `$${numAmount.toFixed(2)}`;
  }
}

export function ProductItem({
  product,
  loading,
  badgeText,
  badgeLogo,
}: {
  product: ProductItemType | RecommendedProductFragment;
  loading?: 'eager' | 'lazy';
  badgeText?: string; // Optional badge text for flash deals or discounts
  badgeLogo?: boolean;
}) {
  const variantUrl = useVariantUrl(product.handle);
  const image = product.featuredImage;
  //console.log('ProductItem:', product);
  // Get price range data
  const priceRange = product.priceRange as any;
  const minPrice = priceRange.minVariantPrice;
  const maxPrice = priceRange.maxVariantPrice || priceRange.minVariantPrice;

  // Get compare-at-price from custom property added by AllProductsWidget
  const compareAtPrice = (product as any).__compareAtPrice;

  // Check if there's a discount (compareAtPrice exists and is higher than regular price)
  const hasDiscount =
    compareAtPrice &&
    parseFloat(compareAtPrice.amount) > parseFloat(minPrice.amount);

  return (
    <Link
      className="border border-gray-300 bg-white p-2.5 text-center shadow-md relative flex flex-col justify-between transition-transform duration-200 ease-in-out hover:scale-105"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
    >
      {/* Flash Deal Badge - positioned absolute like the CSS */}
      {badgeText && (
        <div className="absolute top-1 left-1 bg-[var(--color-1)] text-white p-2 !text-[10px] rounded-sm flex gap-2 items-center">
          {badgeLogo && (
            <img
              src="/alarm-clock-svgrepo-com.svg"
              alt="Alarm Clock"
              style={{width: 20, height: 20}}
            />
          )}
          {badgeText}
        </div>
      )}

      {/* Product Image */}
      <div className="mb-2.5">
        {image && (
          <Image
            alt={image.altText || product.title}
            aspectRatio="1/1"
            data={image}
            loading={loading}
            sizes="(min-width: 45em) 400px, 100vw"
            className="max-w-full h-auto object-cover w-full"
          />
        )}
      </div>

      {/* Product Title */}
      <div className="flex flex-wrap justify-center items-center text-center text-sm font-bold text-gray-800 mb-2.5 line-clamp-2 min-h-[2.5rem] leading-tight">
        {product.title}
      </div>

      {/* Price Info Section - with margin like CSS */}
      <div
        className={`flex ${compareAtPrice ? 'flex-wrap' : 'flex-col'} gap-1 justify-center items-center`}
      >
        {/* Compare At Price (strikethrough if discounted) - show first */}
        {hasDiscount && compareAtPrice && (
          <div className="text-md text-[gray-500] line-through whitespace-nowrap">
            {formatCurrency(compareAtPrice.amount, compareAtPrice.currencyCode)}
          </div>
        )}

        {/* Current Price */}
        <div className="text-lg font-bold text-[var(--color-1)] whitespace-nowrap">
          {formatCurrency(minPrice.amount, minPrice.currencyCode)}
          {minPrice.amount !== maxPrice.amount && compareAtPrice && (
            <>
              <span className="text-sm font-normal text-[var(--color-1)]">
                {' '}
                -{' '}
              </span>
              {formatCurrency(maxPrice.amount, maxPrice.currencyCode)}
            </>
          )}
        </div>
        {badgeText === 'Offre Flash' && <hr className="separator" />}
        {/* Savings Badge - only if there's a discount */}
        {badgeText === 'Offre Flash' && (
          <div className="w-full !text-sm font-medium text-[#666666] px-2 pb-1 mt-2.5">
            <p className="text-[#B7B7B7] !text-xs !md:pt-2 break-words sm:whitespace-nowrap">
              Offre spéciale du jour:
            </p>
            <div className="flex flex-wrap justify-center gap-1 !text-xs text-center">
              {locale === 'fr' ? (
                // French format: day - month - year
                <>
                  <span>
                    {new Date().toLocaleDateString('fr-FR', {weekday: 'long'})}
                  ,</span>
                  <span className="text-[var(--color-1)]">
                    {new Date().toLocaleDateString('fr-FR', {day: 'numeric'})}
                  ,</span>
                  <span className="text-[var(--color-1)]">
                    {new Date().toLocaleDateString('fr-FR', {month: 'long'})}
                 , </span>
                  <span>
                    {new Date().toLocaleDateString('fr-FR', {year: 'numeric'})}
                  </span>
                    </>
              ) : (
                // English format: month day, year
                <>
                  <span>
                    {new Date().toLocaleDateString('en-US', {weekday: 'long'})}
                  ,</span>
                   <span className="text-[var(--color-1)]">
                    {new Date().toLocaleDateString('en-US', {month: 'long'})}
                  ,</span>
                  <span>
                    {new Date().toLocaleDateString('en-US', {day: 'numeric'})},
                  ,</span>
                  <span>
                    {new Date().toLocaleDateString('en-US', {year: 'numeric'})}
                  </span>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
