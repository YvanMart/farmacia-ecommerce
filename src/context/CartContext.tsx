import { createContext, useContext, useState, ReactNode } from "react";

const CartContext = createContext({
  cartItems: [] as CartItem[],
  addToCart: (product: Product) => {},
  cartCount: 0, // Contar unidades
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [availableStock, setAvailableStock] = useState<Record<number, number>>(
    {}
  );

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      const stockAvailable = availableStock[product.id] ?? product.quantityAvailable;

      console.log(`Intentando agregar producto: ${product.name}`);
      console.log(`Stock disponible antes de agregar: ${stockAvailable}`);
      console.log(`Carrito actual:`, prev);

      if (existing) {
        if (existing.quantity <= stockAvailable) {
          console.log(
            `Producto ya en carrito, aumentando cantidad de ${existing.quantity} a ${existing.quantity + 1}`
          );

          setAvailableStock((prevStock) => {
            const updatedStock = { ...prevStock, [product.id]: stockAvailable - 1 };
            console.log(`Stock disponible actualizado: ${updatedStock[product.id]}`);
            return updatedStock;
          });

          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          console.warn(`No se puede agregar más productos, stock agotado`);
        }
      } else if (stockAvailable > 0) {
        console.log(`Producto agregado al carrito con cantidad: 1`);

        setAvailableStock((prevStock) => {
          const updatedStock = { ...prevStock, [product.id]: stockAvailable - 1 };
          console.log(`Stock disponible actualizado: ${updatedStock[product.id]}`);
          return updatedStock;
        });

        return [...prev, { id: product.id, name: product.name, quantity: 1 }];
      }

      console.warn(`No se puede agregar el producto, stock agotado`);
      return prev;
    });
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);