import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TanfolyamAdminComponent } from './tanfolyam-admin/tanfolyam-admin.component';

const routes: Routes = [
  {path:"tanfolyamadmin",component:TanfolyamAdminComponent},
  {path:"",redirectTo:"/tanfolyamadmin",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
