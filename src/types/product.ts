export interface Product {
  createdAt: string;  // Fecha de creación en formato ISO 8601
  name: string;       // Nombre del producto
  image: string;      // URL de la imagen del producto
  price: string;      // Precio original (string porque viene entre comillas)
  offer_price: string; // Precio con descuento (string porque viene entre comillas)
  promoted: boolean;  // Indica si el producto está promocionado
  featured_product: boolean; // Indica si el producto es destacado
  bar_code: number;   // Código de barras
  presentation_type: string; // Tipo de presentación (ej. "CAJA")
  category: string;   // Categoría del producto
  description: string; // Descripción del producto
  state: boolean;     // Estado del producto (activo/inactivo)
  id: string;         // Identificador único del producto
}