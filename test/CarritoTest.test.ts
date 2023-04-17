import { Carrito } from "../classes/Carrito";
import { NotificacionObservador } from "../classes/NotificacionObservador";
import { Producto } from "../classes/Producto";

test("Debe registrar un observador", () => {
  const carrito = new Carrito();
  const notificacionObservador = new NotificacionObservador();
  carrito.registrarObservador(notificacionObservador);
  expect(carrito).toBeDefined();
});

test("Debe remover un observador", () => {
  const carrito = new Carrito();
  const notificacionObservador = new NotificacionObservador();
  carrito.registrarObservador(notificacionObservador);
  carrito.removerObservador(notificacionObservador);
  expect(carrito).toBeDefined();
});

test("Debe agregar un producto al carrito", () => {
  const carrito = new Carrito();
  carrito.addProduct(new Producto("Zapatos", 100));
  expect(carrito).toBeDefined();
});

test("Debe notificar a los observadores", () => {
  const carrito = new Carrito();
  const notificationObserver = new NotificacionObservador();
  carrito.registrarObservador(notificationObserver);
  
  carrito.addProduct(new Producto("Zapatos", 100));

  expect(carrito).toBeDefined();
});
