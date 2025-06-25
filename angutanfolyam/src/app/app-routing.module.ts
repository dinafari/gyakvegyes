import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TanfolyamokComponent } from './tanfolyamok/tanfolyamok.component';

const routes: Routes = [
  {path:"tanfolyamok",component:TanfolyamokComponent},
  {path:"",redirectTo:"/tanfolyamok",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
