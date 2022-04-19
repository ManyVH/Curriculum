import { Component, OnInit } from '@angular/core';
import { ServcioDatosService } from '../servcio-datos.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor(public datos: ServcioDatosService) { }

  ngOnInit(): void {
  }

  estrellasDominio(value:string, padre:HTMLDivElement){
    
    console.log(padre);
    const paso =<HTMLSpanElement>  padre!.getElementsByClassName('estrellas')[0];
    const span = document.createElement('span');
    

    paso.removeChild(<HTMLSpanElement>paso!.firstChild)
    for (let index = 0; index < Number.parseInt(value); index++) {
      const imagen = document.createElement('img');
    imagen.src = './assets/star.png'
      span.append(imagen)
      
    }
    paso.appendChild(span)
    
  }

  borrar(evento:HTMLDivElement){
    
    let padre = <HTMLDivElement> evento!.parentNode;
    let id = padre.getAttribute('id');
    let indice = Number.parseInt(<string>id)
    console.log(this.datos.contarHab );
    console.log(id);
    let nuevo:number[] = []
    for (let index = 0; index < this.datos.contarHab.length; index++) {
      if (indice!==index) {
        nuevo.push(this.datos.contarHab[index])
      }
      
    }
    this.datos.contarHab = nuevo
    console.log(this.datos.contarHab );
  }
}
