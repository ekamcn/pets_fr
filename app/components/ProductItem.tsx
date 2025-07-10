import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import type {
  ProductItemFragment,
  CollectionItemFragment,
  RecommendedProductFragment,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';

export function ProductItem({
  product,
  loading,
}: {
  product:
    | CollectionItemFragment
    | ProductItemFragment
    | RecommendedProductFragment;
  loading?: 'eager' | 'lazy';
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
  const hasDiscount = compareAtPrice && 
    parseFloat(compareAtPrice.amount) > parseFloat(minPrice.amount);

  return (
    <Link
      className="border border-gray-300 bg-white p-2.5 text-center shadow-md relative flex flex-col justify-between transition-transform duration-200 ease-in-out hover:transform hover:-translate-y-1 rounded-sm"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
    >
      {/* Flash Deal Badge - positioned absolute like the CSS */}
      {hasDiscount && (
        <div className="absolute top-1 left-1 bg-[#9E8471] text-white px-1.5 py-1 text-xs rounded-sm flex items-center z-10">
          Flash Deal
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
      <h4 className="text-sm font-bold text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem] leading-tight">
        {product.title}
      </h4>
      
      {/* Price Info Section - with margin like CSS */}
      <div className="my-2.5 flex flex-col gap-1">
        {/* Compare At Price (strikethrough if discounted) - show first */}
        {hasDiscount && compareAtPrice && (
          <div className="text-sm text-[gray-500] line-through">
            <Money data={compareAtPrice} />
          </div>
        )}
        
        {/* Current Price */}
        <div className="text-lg font-bold text-[#9E8471]">
          <Money data={minPrice} />
          {minPrice.amount !== maxPrice.amount && compareAtPrice &&(
            <>
              <span className="text-sm font-normal text-[#9E8471]"> - </span>
              <Money data={maxPrice} />
            </>
          )}
        </div>
        
        {/* Savings Badge 
        {hasDiscount && compareAtPrice && (
          <div className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded self-center">
            Save {Math.round((1 - parseFloat(minPrice.amount) / parseFloat(compareAtPrice.amount)) * 100)}%
          </div>
        )}*/}
      </div>
    </Link>
  );
}
