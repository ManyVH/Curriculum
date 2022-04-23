
export interface DatosPersonales {
    nombre: string;
    apellidos: string;
    foto: string;
    emails: string[];
    telefonos: string[];
  }

export interface DatosAcademicos{
    grado: string;
    institucion: string;
    fechaInicio: number;
    fechaFin: number;
}

export interface DatosExperiencia{
  puesto: string;
  empresa: string;
  responsabilidades: string[];
  fechaInicio: number;
  fechaFin: number;
}

export interface DatosHabilidades{
  habilidad: string;
  dominio: number;
  
}