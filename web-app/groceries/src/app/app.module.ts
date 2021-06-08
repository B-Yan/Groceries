
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import {BrowseModule } from "./browse/browse.module";
import { SalesModule } from './sales/sales.module';
import { StoresModule } from './stores/stores.module';
import { MenuEntityComponent } from './menu/menu-entity/menu-entity.component';
import { ItemEntityComponent } from './item/item-entity/item-entity.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuEntityComponent,
    ItemEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoresModule,
    SalesModule,
    HomeModule,
    BrowseModule,
    BrowserModule

  ],
 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
