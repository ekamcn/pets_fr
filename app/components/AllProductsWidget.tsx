import * as React from 'react';
import {ProductItem} from '~/components/ProductItem';
import type {ProductItemFragment} from 'storefrontapi.generated';

interface ProductNode {
  id: string;
  title: string;
  description?: string;
  featuredImage?: {
    id: string;
    url: string;
  };
  variants: {
    edges: Array<{
      node: {
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
}

interface GraphQLResponse {
  data?: GraphQLProductsResponse;
  errors?: Array<{ message: string }>;
}

interface GraphQLProductsResponse {
  products: {
    edges: Array<{
      node: ProductNode;
    }>;
  };
}

interface ProductsData {
  nodes: ProductItemFragment[];
  pageInfo: {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    startCursor?: string;
    endCursor?: string;
  };
}

// GraphQL query for fetching products
const ALL_PRODUCTS_QUERY = `
  query GetAllProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          featuredImage {
            id
            url
          }
          variants(first: 3) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Function to convert GraphQL response to ProductItemFragment format
function convertToProductItemFragment(node: ProductNode): ProductItemFragment {
  const firstVariant = node.variants.edges[0]?.node;
  const price = firstVariant?.price || { amount: '0', currencyCode: 'USD' };
  
  return {
    id: node.id,
    handle: node.title.toLowerCase().replace(/\s+/g, '-'),
    title: node.title,
    featuredImage: node.featuredImage ? {
      id: node.featuredImage.id,
      altText: node.title,
      url: node.featuredImage.url,
      width: 400,
      height: 400,
    } : undefined,
    priceRange: {
      minVariantPrice: {
        amount: price.amount,
        currencyCode: price.currencyCode as any,
      },
      maxVariantPrice: {
        amount: price.amount,
        currencyCode: price.currencyCode as any,
      },
    },
  };
}

interface AllProductsWidgetProps {
  title?: string;
  limit?: number;
  className?: string;
  showTitle?: boolean;
  storefront?: any; // For when passing storefront context
}

/**
 * AllProductsWidget - A self-contained component to display all products
 * 
 * This component fetches real product data from your Shopify storefront using GraphQL.
 * It can be used anywhere in your application without requiring props.
 * It includes its own loading state and error handling.
 * 
 * Usage:
 * ```tsx
 * // With all default settings
 * <AllProductsWidgetSimple />
 * 
 * // With custom settings
 * <AllProductsWidget 
 *   title="Featured Products" 
 *   limit={12} 
 *   showTitle={true} 
 * />
 * ```
 */
export function AllProductsWidget({
  title = "All Products",
  limit = 20,
  className = "all-products-widget",
  showTitle = true,
  storefront,
}: AllProductsWidgetProps = {}) {
  const [products, setProducts] = React.useState<ProductsData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        
        // Use fetch to call the GraphQL API
        const response = await fetch('/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: ALL_PRODUCTS_QUERY,
            variables: {
              first: limit,
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json() as GraphQLResponse;
        
        if (result.errors && result.errors.length > 0) {
          throw new Error(result.errors[0].message);
        }

        const graphqlData = result.data;
        
        if (!graphqlData) {
          throw new Error('No data received from GraphQL API');
        }
        
        // Convert GraphQL response to our expected format
        const convertedProducts: ProductsData = {
          nodes: graphqlData.products.edges.map(edge => convertToProductItemFragment(edge.node)),
          pageInfo: {
            hasPreviousPage: false,
            hasNextPage: true,
            startCursor: 'start',
            endCursor: 'end',
          },
        };
        
        setProducts(convertedProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [limit]);

  if (loading) {
    return (
      <div className={`${className} loading`}>
        <div className="loading-spinner">Loading products...</div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .loading-spinner {
                text-align: center;
                padding: 2rem;
                color: #666;
                font-size: 1.1rem;
              }
              .loading-spinner::after {
                content: '';
                display: inline-block;
                width: 20px;
                height: 20px;
                border: 3px solid #f3f3f3;
                border-top: 3px solid #333;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin-left: 10px;
                vertical-align: middle;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `,
          }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} error`}>
        <p style={{ 
          color: 'red', 
          padding: '1rem', 
          textAlign: 'center',
          background: '#fee',
          borderRadius: '4px',
          border: '1px solid #fcc'
        }}>
          Error: {error}
        </p>
      </div>
    );
  }

  if (!products || products.nodes.length === 0) {
    return (
      <div className={`${className} no-products`}>
        <p style={{ 
          textAlign: 'center', 
          padding: '2rem', 
          color: '#666',
          background: '#f9f9f9',
          borderRadius: '4px'
        }}>
          No products found.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {showTitle && <h2>{title}</h2>}
      <div className="products-grid">
        {products.nodes.slice(0, limit).map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            loading={index < 8 ? 'eager' : undefined}
          />
        ))}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .${className} {
              margin: 1rem 0;
            }
            .products-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
              gap: 1.5rem;
              margin-top: 1rem;
              padding: 0;
            }
            .${className} h2 {
              margin-bottom: 1rem;
              font-size: 1.75rem;
              color: #333;
              text-align: center;
            }
            @media (max-width: 768px) {
              .products-grid {
                grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                gap: 1rem;
              }
              .${className} h2 {
                font-size: 1.5rem;
              }
            }
          `,
        }}
      />
    </div>
  );
}

/**
 * AllProductsWidgetSimple - A no-props version of AllProductsWidget
 * 
 * This is the simplest way to add product display to any route.
 * Just import and use:
 * 
 * ```tsx
 * import {AllProductsWidgetSimple} from '~/components/AllProductsWidget';
 * 
 * export default function MyRoute() {
 *   return (
 *     <div>
 *       <h1>My Page</h1>
 *       <AllProductsWidgetSimple />
 *     </div>
 *   );
 * }
 * ```
 */
export function AllProductsWidgetSimple() {
  return <AllProductsWidget />;
}
