import { Component,  OnInit } from '@angular/core';
import { ServcioDatosService } from '../servcio-datos.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  
  constructor( public datos: ServcioDatosService) { }

  ngOnInit(): void {
  }

  
  
  
  agregarEmail(){
    this.datos.contarEmails.push(this.datos.contarEmails[this.datos.contarEmails.length-1]+1)
    
  }
  borrarEmails(id:number){
    
      this.datos.contarEmails.splice(id,1)
      
      this.datos.datosPersonales.emails.splice(id, 1)
      
  }



  borrarTelefonos(id:number){
    
    this.datos.contarTelefonos.splice(id,1)
      
      this.datos.datosPersonales.telefonos.splice(id, 1)
      
  }
  
  agregarTelefono(){
    this.datos.contarTelefonos.push(this.datos.contarTelefonos[this.datos.contarTelefonos.length-1]+1)
    
  }

  agregarAcademia(){
    this.datos.contarAca.push(this.datos.contarAca[this.datos.contarAca.length-1]+1)
    this.datos.datosAcademicos.push({
      grado: '',
      institucion: '',
      fechaInicio: 2016,
      fechaFin: 2017
    })
  }

  agregarHab(){
    //Crear Servicio para esta cosa fea
    this.datos.contarHab.push(this.datos.contarHab[this.datos.contarHab.length-1]+1)
    this.datos.datosHabilidades.push({
      habilidad: '',
      dominio: [0]
    })
  }
  
  agregarExp(){
    this.datos.contarExp.push(this.datos.contarExp[this.datos.contarExp.length-1]+1)
    this.datos.datosExpLaboral.push({
      puesto: '',
      empresa: '',
      responsabilidades: [],
      fechaInicio: 2016,
      fechaFin: 2017
    })
  }
  
 
  
}
