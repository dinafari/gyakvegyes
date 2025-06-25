import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UzenetfogadasComponent } from './uzenetfogadas/uzenetfogadas.component';
import { TanfolyamlistaComponent } from './tanfolyamlista/tanfolyamlista.component';

const routes: Routes = [
  {path:"uzenetfogadas",component:UzenetfogadasComponent},
  {path:"tanfolyamlista",component:TanfolyamlistaComponent},
  {path:"",redirectTo:"/uzenetfogadas",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
