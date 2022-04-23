import { Component, Input, OnInit } from '@angular/core';
import { ServcioDatosService } from '../servcio-datos.service';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {
  @Input() id= 0
  constructor(public datos:ServcioDatosService) { }

  ngOnInit(): void {
  }

  borrarAca(){
    this.datos.contarAca.splice(this.id,1)
    this.datos.datosAcademicos.splice(this.id,1)
  }

  
}
