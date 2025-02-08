import { CartProvider } from '../context/CartContext';
import ProductList from '../components/ProductList';
import CartIcon from '../components/CartIcon';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <CartProvider>
      <CartIcon />
      <ProductList />
    </CartProvider>
  );
}