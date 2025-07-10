# AllProductsWidget Component

A self-contained React component for displaying all products in your Hydrogen storefront. This component fetches real product data from your Sh## Real Data Integration

The component now fetches real product data from your Shopify storefront using GraphQL. The implementation includes:

1. **Custom GraphQL API route** (`/graphql`) that handles product queries
2. **Automatic data conversion** from GraphQL response to component format
3. **Error handling** for network and API errors
4. **Loading states** during data fetching

## Architecture

The component works by:

1. Making a POST request to `/graphql` with the product query
2. Converting the GraphQL response to the expected ProductItemFragment format
3. Rendering products using the existing ProductItem component
4. Handling loading and error states gracefully

## File Structure

- **Component**: `app/components/AllProductsWidget.tsx`
- **GraphQL API**: `app/routes/graphql.tsx`
- **Demo route**: `app/routes/products-demo.tsx`
- **Documentation**: `AllProductsWidget-README.md`ront using GraphQL and can be used anywhere in your application without requiring any props or data fetching setup.

## Features

- **No props required**: Use `AllProductsWidgetSimple` for instant product display
- **Real GraphQL data**: Fetches actual products from your Shopify storefront
- **Customizable**: Use `AllProductsWidget` with props for custom behavior
- **Built-in loading states**: Shows spinner while fetching products
- **Error handling**: Gracefully handles and displays errors
- **Responsive design**: Works on desktop and mobile devices
- **TypeScript support**: Full type safety included

## GraphQL Query Used

The component uses this GraphQL query to fetch products:

```graphql
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
```

## Quick Start

### 1. Simple Usage (No Props)

The easiest way to add product display to any route:

```tsx
import {AllProductsWidgetSimple} from '~/components/AllProductsWidget';

export default function MyRoute() {
  return (
    <div>
      <h1>My Page</h1>
      <AllProductsWidgetSimple />
    </div>
  );
}
```

### 2. Custom Usage (With Props)

For more control over the widget:

```tsx
import {AllProductsWidget} from '~/components/AllProductsWidget';

export default function MyRoute() {
  return (
    <div>
      <h1>My Page</h1>
      <AllProductsWidget 
        title="Featured Products" 
        limit={12} 
        showTitle={true}
        className="my-custom-products"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "All Products" | Title displayed above the products |
| `limit` | number | 20 | Maximum number of products to display |
| `className` | string | "all-products-widget" | CSS class name for the wrapper |
| `showTitle` | boolean | true | Whether to show the title |
| `storefront` | object | undefined | Optional storefront client (auto-detected) |

## Examples

### Basic Product Display

```tsx
<AllProductsWidgetSimple />
```

### Custom Title and Limit

```tsx
<AllProductsWidget 
  title="Best Sellers" 
  limit={8} 
/>
```

### No Title with Custom Styling

```tsx
<AllProductsWidget 
  showTitle={false}
  className="featured-products"
  limit={6}
/>
```

### Multiple Widgets on One Page

```tsx
export default function HomePage() {
  return (
    <div>
      <AllProductsWidget 
        title="New Arrivals" 
        limit={4} 
      />
      
      <AllProductsWidget 
        title="Best Sellers" 
        limit={4} 
      />
      
      <AllProductsWidget 
        title="Sale Items" 
        limit={8} 
      />
    </div>
  );
}
```

## Styling

The component includes built-in responsive CSS that works out of the box. You can customize it by:

1. **Using the className prop:**
```tsx
<AllProductsWidget className="my-custom-class" />
```

2. **Adding custom CSS:**
```css
.my-custom-class .products-grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}
```

## States

The component handles three states automatically:

1. **Loading**: Shows a spinner while fetching products
2. **Error**: Displays error message if something goes wrong
3. **Success**: Shows the products grid

## Real Data Integration

Currently, the component uses mock data. To integrate with real Shopify data:

1. Set `useMockData={false}` in the component props
2. Update the component to use your actual GraphQL queries
3. Replace the mock data with real product data from your Shopify store

## File Location

- Component: `app/components/AllProductsWidget.tsx`
- Demo route: `app/routes/products-demo.tsx`

## Demo

Visit `/products-demo` in your application to see the component in action with different configurations.
