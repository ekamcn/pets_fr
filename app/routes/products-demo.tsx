import {AllProductsWidgetSimple, AllProductsWidget} from '~/components/AllProductsWidget';

export default function ProductsDemo() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Products Demo Page</h1>
      <p>This page demonstrates how to use the AllProductsWidget component anywhere in your application.</p>
      
      <section>
        <h2>Simple Usage (No Props)</h2>
        <p>Just import and use - no props required:</p>
        <AllProductsWidgetSimple />
      </section>
      
      <section style={{ marginTop: '3rem' }}>
        <h2>Custom Usage (With Props)</h2>
        <p>You can customize the widget with various props:</p>
        <AllProductsWidget 
          title="Featured Products" 
          limit={2} 
          showTitle={true}
          className="custom-products-widget"
        />
      </section>
      
      <section style={{ marginTop: '3rem' }}>
        <h2>Another Example</h2>
        <p>Here&apos;s another widget with different settings:</p>
        <AllProductsWidget 
          title="Limited Collection" 
          limit={3} 
          showTitle={true}
          className="limited-products-widget"
        />
      </section>
    </div>
  );
}
