import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VelemenyHozzaadasComponent } from './velemeny-hozzaadas/velemeny-hozzaadas.component';
import { FormsModule } from '@angular/forms';
import { SzovegbevitelComponent } from './szovegbevitel/szovegbevitel.component';
import { CelsiusFarenheitComponent } from './celsius-farenheit/celsius-farenheit.component';
import { TanfolyamFelvitelComponent } from './tanfolyam-felvitel/tanfolyam-felvitel.component';

@NgModule({
  declarations: [
    AppComponent,
    VelemenyHozzaadasComponent,
    SzovegbevitelComponent,
    CelsiusFarenheitComponent,
    TanfolyamFelvitelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
