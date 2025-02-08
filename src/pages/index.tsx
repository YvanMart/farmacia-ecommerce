import '../styles/global.css';
import ProductList from '../components/ProductList';
import CartIcon from '../components/CartIcon';

export default function Home() {
  return (
    <>
      <CartIcon href="http://localhost:3000/cart"/>
      <ProductList />
    </>
  );
}
