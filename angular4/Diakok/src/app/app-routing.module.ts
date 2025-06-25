import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiakListaComponent } from './diak-lista/diak-lista.component';

const routes: Routes = [
  {path:"diak-lista", component:DiakListaComponent},
  {path:"",redirectTo:"/diak-lista",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
