import { Subject } from "../interfaces/Subject";
import { Observador } from "../interfaces/Observador";
import { Producto } from "./Producto";

export class Carrito implements Subject {
  private observadores: Observador[] = [];
  private productos: Producto[] = [];

  addProduct(producto: Producto) {
    this.productos.push(producto);
    this.notificarObservador();
  }

  registrarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  removerObservador(observador: Observador): void {
    const index = this.observadores.indexOf(observador);
    if (index > -1) {
      this.observadores.splice(index, 1);
    }
  }

  notificarObservador(): void {
    for (const observador of this.observadores) {
      observador.update(this);
    }
  }

  getProductos(): Producto[] {
    return this.productos;
  }
}
