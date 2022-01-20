import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { RickAndMortyWikiModule } from './rick-and-morty-wiki/rick-and-morty-wiki.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    RickAndMortyWikiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
