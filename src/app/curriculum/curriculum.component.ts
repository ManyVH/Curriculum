import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ServcioDatosService } from '../servcio-datos.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  
  constructor(public datos: ServcioDatosService) {
    
  
  }

  ngOnInit(): void {}
 
    
}
