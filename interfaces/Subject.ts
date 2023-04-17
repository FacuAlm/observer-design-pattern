import { Observador } from "./Observador";

export interface Subject {
  registrarObservador(observador: Observador): void;
  removerObservador(observador: Observador): void;
  notificarObservador(): void;
}
