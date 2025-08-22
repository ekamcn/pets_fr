import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import type {
  RecommendedProductFragment,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';

const locale = import.meta.env.VITE_LANGUAGE;

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

export function ListingProductItem({
  product,
  loading,
  badgeText,
}: {
  product: ProductItemType | RecommendedProductFragment;
  loading?: 'eager' | 'lazy';
  badgeText?: string; // Optional badge text for flash deals or discounts
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
    <div className="flex flex-col justify-between items-center gap-2">
      <Link
        className="bg-white text-center relative h-full flex flex-col justify-between"
        key={product.id}
        to={variantUrl}
      >
        <div>
          {/* Flash Deal Badge - positioned absolute like the CSS */}
          {badgeText && (
            <div className="absolute top-1 left-1 bg-[var(--color-1)] text-white p-2 text-xs rounded-sm flex items-center">
              {badgeText}
            </div>
          )}

          {/* Product Image */}
          <div className="mb-2.5 w-full">
            {image && (
              <Image
                alt={image.altText || product.title}
                aspectRatio="1/1"
                data={image}
                height={432}
                width={432}
                loading={loading}
                sizes="(min-width: 45em) 400px, 100vw"
                className="max-w-full h-auto object-cover w-full"
              />
            )}
          </div>
        </div>

        <div>
          {/* Product Title */}
          <div className="flex flex-wrap justify-center items-center text-center text-sm lg:text-base font-bold text-gray-800 mb-2.5 line-clamp-2 min-h-[2.5rem] leading-tight">
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
            <div className="text-sm lg:text-base whitespace-nowrap">
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
                        {new Date().toLocaleDateString('fr-FR', {day: 'numeric'})}
                      </span>
                      <span>-</span>
                      <span className="text-[var(--color-1)]">
                        {new Date().toLocaleDateString('fr-FR', {month: 'long'})}
                      </span>
                      <span>-</span>
                      <span>
                        {new Date().toLocaleDateString('fr-FR', {year: 'numeric'})}
                      </span>
                    </>
                  ) : (
                    // English format: month day, year
                    <>
                      <span className="text-[var(--color-1)]">
                        {new Date().toLocaleDateString('en-US', {month: 'long'})}
                      </span>
                      <span>
                        {new Date().toLocaleDateString('en-US', {day: 'numeric'})},
                      </span>
                      <span>
                        {new Date().toLocaleDateString('en-US', {year: 'numeric'})}
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
      <Link
        to={variantUrl}
        prefetch="intent"
        className="w-full border border-gray-400 hover:border-black p-3 rounded-4xl text-sm transition ease-in-out duration-200 flex justify-center items-center"
      >
        Voir le produit
      </Link>
    </div>
  );
}
