import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    };
    loadProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre o código..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;