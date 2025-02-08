import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartIcon = () => {
  const { cartCount } = useCart();
  
  return (
    <div className="cart-icon">
      <FaShoppingCart />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
};

export default CartIcon;