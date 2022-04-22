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
    let nuevo: number[] = []
      for (let index = 0; index < this.datos.contarAca.length; index++) {
        if (index!== this.id) {
          nuevo.push(this.datos.contarAca[index])
        }
      }
      this.datos.contarAca = nuevo
  }
}
