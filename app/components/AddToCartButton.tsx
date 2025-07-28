import {type FetcherWithComponents} from 'react-router';
import {CartForm, type OptimisticCartLineInput} from '@shopify/hydrogen';

export function AddToCartButton({
  analytics,
  children,
  disabled,
  lines,
  onClick,
}: {
  analytics?: unknown;
  children: React.ReactNode;
  disabled?: boolean;
  lines: Array<OptimisticCartLineInput>;
  onClick?: () => void;
}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher: FetcherWithComponents<any>) => (
        <>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <div className="flex items-center justify-end rounded-full py-1 px-3 gap-2">
 
            <span className="font-normal text-sm"> ✅ In Stock</span>
            <span className="font-normal text-sm bg-green-700 rounded-full px-1.5 py-1.5"> </span>

          </div>
          <button
            type="submit"
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
            className={
              `product-form__submit  flex items-center justify-center gap-2 w-[100%] py-2 rounded-full  text-lg font-bold transition-colors duration-200 bg-[#9E8471] text-white` +
              (disabled || fetcher.state !== 'idle' ? ' opacity-60 cursor-not-allowed' : '')
            }
          >
            <span className="addbtntext">{children}</span>
          </button>
        </>
      )}
    </CartForm>
  );
}
