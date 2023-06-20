import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from 'src/app/Componentes/paginas/navegacion/navegacion.component';

import { DonanteComponent } from './Donante/donante.component';
import { PaginasComponent } from './paginas.component';


import { programadorComponent} from './Programador/programador.component';


const routes: Routes = [
  {


    path: '', component: PaginasComponent, children: [
      {path:'donante',component:DonanteComponent},
     
      {path:'programador',component:programadorComponent},
    ]



  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
