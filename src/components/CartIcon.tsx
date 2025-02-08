import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartIcon = ({ href }) => {
  const { cartCount } = useCart();
  
  return (
    <a href={href} className="cart-icon">
    <div className="cart-icon">
      <FaShoppingCart />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
    </a>
  );
};

export default CartIcon;