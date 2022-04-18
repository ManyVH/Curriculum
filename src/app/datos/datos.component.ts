import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foto:string = '';
  nombre:string ='';
  apellido:string ='';

  
  public get getFoto() : string {
    return this.foto;
  }
  public get getNombre() : string {
    return this.nombre;
  }
  public get getApellido() : string {
    return this.apellido;
  }
  
  agregarEmail(){
    const emailEstructura = <HTMLDivElement> document.getElementById('emails')!.firstChild;
    const nuevo =<HTMLSpanElement> emailEstructura.cloneNode(true);
    nuevo.setAttribute('id',''+document.getElementById('emails')!.childNodes.length);
    console.log(document.getElementById('emails')!.childNodes.length);
    document.getElementById('emails')!.appendChild(nuevo);
    
  }
  agregarTelefono(){
    const emailEstructura = <HTMLDivElement> document.getElementById('telefonos')!.lastChild;
    const nuevo =<HTMLSpanElement> emailEstructura.cloneNode(true);
    nuevo.setAttribute('id',''+document.getElementById('telefonos')!.childNodes.length)
    document.getElementById('telefonos')!.appendChild(nuevo);
    
  }

  agregarAcademia(){
    const emailEstructura = <HTMLDivElement> document.getElementById('academia')!.lastChild;
    const nuevo =<HTMLDivElement> emailEstructura.cloneNode(true);
    document.getElementById('academia')!.appendChild(document.createElement('br'));
    let id:string =<string> emailEstructura!.getAttribute('id');
    
    nuevo.setAttribute('id',''+(Number.parseInt(id)+1))
    document.getElementById('academia')!.appendChild(nuevo);
    console.log(document.getElementById('academia')!.childNodes);
  }


  pasarPagina(){
    console.log(this.foto);
    console.log(this.nombre);
    console.log(this.apellido);
  }
}