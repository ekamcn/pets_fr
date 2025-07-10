import {AllProductsWidget} from '~/components/AllProductsWidget';
import {AllCollectionsWidget} from '~/components/AllCollections';

export default function ProductsDemo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Products & Collections Demo
      </h1>
      
      {/* Products Section */}
      <section className="mb-12">
        <AllProductsWidget 
          title="Featured Products" 
          limit={8} 
          showTitle={true}
          className="products-widget"
        />
      </section>
      
      {/* Collections Section */}
      <section className="mb-12">
        <AllCollectionsWidget 
          title="Shop by Collection" 
          limit={6} 
          showTitle={true}
          className="collections-widget"
        />
      </section>
      
      {/* Simple Widget without props */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          More Products
        </h2>
        <AllProductsWidget limit={4} />
      </section>
    </div>
  );
}
