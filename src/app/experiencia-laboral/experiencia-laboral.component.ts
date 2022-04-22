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
      
      let nuevo: number[] = []
      for (let index = 0; index < this.respon.length; index++) {
        if (index!== idPaso) {
          nuevo.push(this.respon[index])
        }
      }
      this.respon = nuevo
      

  }
  borrarExp(){
    let nuevo: number[] = []
      for (let index = 0; index < this.datos.contarExp.length; index++) {
        if (index!== this.id) {
          nuevo.push(this.datos.contarExp[index])
        }
      }
      this.datos.contarExp = nuevo
  }
}
