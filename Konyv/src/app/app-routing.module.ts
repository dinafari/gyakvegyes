import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KonyvAdminComponent } from './konyv-admin/konyv-admin.component';

const routes: Routes = [
  {path:"konyvadmin",component:KonyvAdminComponent},
  {path:"",redirectTo:"/konyvadmin",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
