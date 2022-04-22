import { Injectable } from '@angular/core';
import { DatosPersonales } from './datos.modelo';

@Injectable({
  providedIn: 'root',
})
export class ServcioDatosService {
  constructor() {}
  //Contadores
  contarHab: number[] = [0];
  contarExp: number[] = [0];
  contarAca: number[] = [0];
  contarTelefonos: number[] = [0];
  contarEmails: number[] = [0];

  //Almacenamiento de los datos

  datosPersonales: DatosPersonales = {
    nombre: '',
    apellidos: '',
    foto: '',
    emails: [],
    telefonos: [],
  };
}
