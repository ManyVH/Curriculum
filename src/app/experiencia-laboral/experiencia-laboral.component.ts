import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ServcioDatosService } from '../servcio-datos.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  respon:number[] = [0]
  @Input() id = 0

  constructor(public datos:ServcioDatosService) {
    
   }

  ngOnInit(): void {
  }

  agregarRes(){
      this.respon.push(this.respon[this.respon.length-1]+1)
      console.log(this.respon);
  }

  borrar(idPaso:number){
      this.respon.splice(idPaso,1)
      this.datos.datosExpLaboral[this.id].responsabilidades.splice(idPaso,1)
      

  }
  borrarExp(){
    this.datos.contarExp.splice(this.id,1)
    this.datos.datosExpLaboral.splice(this.id,1)
  }

  clg(){
    console.log(this.datos.datosExpLaboral);
  }
}
