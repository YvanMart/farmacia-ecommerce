import { useCart } from '../context/CartContext';
import styles from '../styles/Home.module.css';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const isOutOfStock = product.quantityAvailable === 0;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="pricing">
        {product.offer_price && (
          <span className="original-price">${product.price}</span>
        )}
        <span className="current-price">
          ${product.offer_price || product.price}
        </span>
      </div>
      <button 
        onClick={() => addToCart(product)} 
        disabled={isOutOfStock}
      >
        {isOutOfStock ? 'Sin existencias' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default ProductCard;