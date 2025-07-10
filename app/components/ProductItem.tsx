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
      className="block bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
    >
      {/* Sale Badge - only show if there's a discount */}
      <div className="relative">
        {hasDiscount && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-[var(--color-1)] text-white px-3 py-1 rounded text-sm font-medium">
              Flash Deal
            </span>
          </div>
        )}
        
        {/* Product Image */}
        <div className="relative overflow-hidden">
          {image && (
            <Image
              alt={image.altText || product.title}
              aspectRatio="1/1"
              data={image}
              loading={loading}
              sizes="(min-width: 45em) 400px, 100vw"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        {/* Product Title */}
        <h4 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[3.5rem]">
          {product.title}
        </h4>
        
        {/* Price Display */}
        <div className="flex flex-wrap gap-2">
          {/* Current Price */}
         {compareAtPrice && (parseInt(compareAtPrice.amount)>parseInt(minPrice.amount)) &&(
          <div className="text-xl text-gray-500 line-through hover:none">
                <Money data={compareAtPrice} />
              </div>)}
               <div className="text-xl font-bold text-gray-900">
            <Money data={minPrice} />
            {minPrice.amount !== maxPrice.amount && compareAtPrice && (
              <>
                <span className="text-sm font-normal text-gray-600"> - </span>
                <Money data={maxPrice} />
              </>
            )}
          </div>
          
          {/* Compare At Price (strikethrough if discounted) 
          {hasDiscount && compareAtPrice && (
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-500 line-through">
                <span>Was: </span>
                <Money data={compareAtPrice} />
              </div>
              <div className="text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
                Save {Math.round((1 - parseFloat(minPrice.amount) / parseFloat(compareAtPrice.amount)) * 100)}%
              </div>
            </div>
          )}*/}
        </div>
      </div>
    </Link>
  );
}
