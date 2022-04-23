import { Component, Input, OnInit } from '@angular/core';
import { ServcioDatosService } from '../servcio-datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  @Input() id = 0
  constructor(public datos: ServcioDatosService) { }

  ngOnInit(): void {
  }
   estrellas:number[]=[0]
  estrellasDominio(value:string){
    let est:number[] =[]
    for (let index = 0; index < Number.parseInt(value); index++) {
      est.push(index)
    }
    this.estrellas = est
    
  }

  borrar(){
    this.datos.contarHab.splice(this.id,1)
    this.datos.datosHabilidades.splice(this.id,1)
  }
}
