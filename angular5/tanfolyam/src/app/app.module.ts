import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TanfolyamokComponent } from './tanfolyamok/tanfolyamok.component';
import { FormsModule } from '@angular/forms';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { TermekHozaadasComponent } from './termek-hozaadas/termek-hozaadas.component';

@NgModule({
  declarations: [
    AppComponent,
    TanfolyamokComponent,
    KapcsolatComponent,
    TermekHozaadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
