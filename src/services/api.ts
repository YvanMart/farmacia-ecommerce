import axios from 'axios';
import { Product } from '../types/product';

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>('https://67a681cf510789ef0dfb946c.mockapi.io/api/v1/productos');
  const data = response.data;

  const productCount = data.reduce((acc: { [key: string]: number }, product) => {
    acc[product.id] = (acc[product.id] || 0) + 1;
    return acc;
  }, {});

  const uniqueProducts = Object.values(
    data.reduce((acc: { [key: string]: Product }, product) => {
      if (acc[product.id]) {
        acc[product.id].quantityAvailable = productCount[product.id];
      } else {
        acc[product.id] = { ...product, quantityAvailable: productCount[product.id] };
      }
      return acc;
    }, {})
  );

  //console.log(uniqueProducts);
  return uniqueProducts;
};
