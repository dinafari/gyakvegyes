import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UzenetfogadasComponent } from './uzenetfogadas/uzenetfogadas.component';
import { FormsModule } from '@angular/forms';
import { TanfolyamlistaComponent } from './tanfolyamlista/tanfolyamlista.component';

@NgModule({
  declarations: [
    AppComponent,
    UzenetfogadasComponent,
    TanfolyamlistaComponent
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
