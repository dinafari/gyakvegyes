import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewformComponent } from './newform/newform.component';

const routes: Routes = [
  {path:"newform",component:NewformComponent},
  {path:"",redirectTo:"/newform", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
