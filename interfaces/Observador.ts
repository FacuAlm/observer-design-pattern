import { Carrito } from "../classes/Carrito";
export interface Observador {
  update(carrito: Carrito): void;
}
