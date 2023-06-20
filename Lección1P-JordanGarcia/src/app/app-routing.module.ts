import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./Componentes/Home/home.component";
 import { DonanteComponent } from "./Componentes/paginas/Donante/donante.component";
 import { PaginasComponent } from "./Componentes/paginas/paginas.component";
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
{path:'',redirectTo:'home',pathMatch:'full'},
{ path: "home", component: HomeComponent, pathMatch: "full" },

{ path: 'paginas', loadChildren: () => import('./Componentes/paginas/paginas.module').then(x => x.PaginasModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
