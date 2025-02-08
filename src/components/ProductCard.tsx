import '../styles/global.css';

import { useCart } from '../context/CartContext';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, cartItems } = useCart();

  const cartItem = cartItems.find((item) => item.id === product.id);
  const stockRemaining = product.quantityAvailable - (cartItem?.quantity || 0);
  const isOutOfStock = stockRemaining <= 0;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="pricing">
        {/* Mostrar offer_price solo si es mayor a 0 */}
        {product.offer_price && product.offer_price > 0 && (
          <span className="original-price">${product.price}</span>
        )}
        <span className="current-price">
          ${product.offer_price && product.offer_price > 0 ? product.offer_price : product.price}
        </span>
      </div>
      <div className="button-container">
        <button
          className={`button ${isOutOfStock ? 'out-of-stock' : ''}`}
          onClick={() => addToCart(product)}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? 'Sin existencias' : 'Agregar al carrito'}
        </button>
      </div>

    </div>
  );
};

export default ProductCard;