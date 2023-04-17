import { Observador } from "../interfaces/Observador";
import { Carrito } from "./Carrito";

export class NotificacionObservador implements Observador {
  update(carrito: Carrito): void {
    console.log(`El carrito tiene ${carrito.getProductos().length} productos`);
  }
}
