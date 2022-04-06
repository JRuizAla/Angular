import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heroes/heroes.module';
import { HeroDetailModule } from './hero-detail/hero-detail.module';


@NgModule({
  declarations: [ // Nombre de la clase del componente
    AppComponent,
    MessagesComponent
  ],
  imports: [
    HeroDetailModule,
    HeroesModule,
    DashboardModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
