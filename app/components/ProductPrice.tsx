import {Money} from '@shopify/hydrogen';
import type {MoneyV2} from '@shopify/hydrogen/storefront-api-types';

const locale = import.meta.env.VITE_LANGUAGE;

function formatCurrency(amount: string, currencyCode: string) {
  const numAmount = parseFloat(amount);
  
  if (locale === 'fr') {
    // French format: 50 €
    return `${numAmount.toFixed(2)}\u00A0€`;;
  } else {
    // American format: $50.00
    return `$${numAmount.toFixed(2)}`;
  }
}

export function ProductPrice({
  price,
  compareAtPrice,
}: {
  price?: MoneyV2;
  compareAtPrice?: MoneyV2 | null;
}) {
  return (
    <div className="flex flex-col gap-1">
      {compareAtPrice ? (
        <div className="flex flex-col">
          {price ? (
            <div className="text-lg font-bold text-white whitespace-nowrap">
              {formatCurrency(price.amount, price.currencyCode)}
            </div>
          ) : null}
          <div className="text-sm text-gray-500 line-through whitespace-nowrap">
            <span>Was: </span>
            {formatCurrency(compareAtPrice.amount, compareAtPrice.currencyCode)}
          </div>
        </div>
      ) : price ? (
        <div className="text-2xl font-bold text-white whitespace-nowrap">
          {formatCurrency(price.amount, price.currencyCode)}
        </div>
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
}
