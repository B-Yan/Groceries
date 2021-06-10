
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import {BrowseModule } from "./browse/browse.module";
import { SalesModule } from './sales/sales.module';
import { StoresModule } from './stores/stores.module';
import { CartModule } from './cart/cart.module';
import { MenuEntityComponent } from './menu/menu-entity/menu-entity.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoresModule,
    SalesModule,
    HomeModule,
    BrowseModule,
    BrowserModule,
    CartModule

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
