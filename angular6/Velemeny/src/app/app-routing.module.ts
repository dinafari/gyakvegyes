import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VelemenyHozzaadasComponent } from './velemeny-hozzaadas/velemeny-hozzaadas.component';
import { SzovegbevitelComponent } from './szovegbevitel/szovegbevitel.component';
import { CelsiusFarenheitComponent } from './celsius-farenheit/celsius-farenheit.component';
import { TanfolyamFelvitelComponent } from './tanfolyam-felvitel/tanfolyam-felvitel.component';

const routes: Routes = [
  {path:"velemenyhozzaadas",component:VelemenyHozzaadasComponent},
  {path:"szovegbevitel",component:SzovegbevitelComponent},
  {path:"celsiusfarenheit",component:CelsiusFarenheitComponent},
  {path:"tanfolyamfelvitel",component:TanfolyamFelvitelComponent},
  {path:"",redirectTo:"/velemenyhozzaadas",pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
