import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './datos/datos.component';
import { CurriculumComponent } from './curriculum/curriculum.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'crear', component: DatosComponent },
  { path: 'curriculum', component: CurriculumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
