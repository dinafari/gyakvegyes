import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TanfolyamokComponent } from './tanfolyamok/tanfolyamok.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { TermekHozaadasComponent } from './termek-hozaadas/termek-hozaadas.component';

const routes: Routes = [
  {path:"tanfolyamok",component:TanfolyamokComponent},
  {path:"kapcsolat",component:KapcsolatComponent},
  {path:"termekhozzaadas",component:TermekHozaadasComponent},
  {path:"",redirectTo:"/tanfolyamok",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
