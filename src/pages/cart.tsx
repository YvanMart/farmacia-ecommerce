import { useCart } from "../context/CartContext";
import { useEffect } from "react";
import "../styles/cartPage.css";
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  useEffect(() => {
    //console.log("📦 Contenido del carrito:", cartItems);
  }, [cartItems]);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.offer_price > 0 ? Number(item.offer_price) : Number(item.price);
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <Link href="/"> {}
          <div className="back-arrow">←</div> {}
        </Link>
        <h1>Carrito de Compras</h1>
      </div>
      
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                const price = item.offer_price > 0 ? Number(item.offer_price) : Number(item.price);
                const itemTotal = price * item.quantity;

                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${price.toFixed(2)}</td>
                    <td>${itemTotal.toFixed(2)}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cart-summary">
            <h3>Total de Elementos: {totalItems}</h3>
            <h3>Total de la Compra: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;