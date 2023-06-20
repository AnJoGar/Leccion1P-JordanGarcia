
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReusableModule } from '../reusable/reusable.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacionComponent } from 'src/app/Componentes/paginas/navegacion/navegacion.component';
import { PaginasRoutingModule } from './paginas-routing.module';
import { DonanteComponent } from './Donante/donante.component';
import { PaginasComponent } from './paginas.component';

import { programadorComponent } from './Programador/programador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { Footer1Component } from './footer1/footer1.component';




@NgModule({
  declarations: [
    NavegacionComponent,
    PaginasComponent,
    DonanteComponent,
    
   
    programadorComponent,
             Footer1Component,
 
  

  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    ReusableModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
  
  ]
})
export class PaginasModule { }
