import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DatosComponent } from './datos/datos.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { FormacionAcademicaComponent } from './formacion-academica/formacion-academica.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatosComponent,
    CurriculumComponent,
    HabilidadesComponent,
    ExperienciaLaboralComponent,
    FormacionAcademicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
