import '../styles/global.css'

import { CartProvider } from '../context/CartContext';
import ProductList from '../components/ProductList';
import CartIcon from '../components/CartIcon';

export default function Home() {
  return (
    <CartProvider>
      <CartIcon />
      <ProductList />
    </CartProvider>
  );
}