import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresHomeComponent } from './stores-home/stores-home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StoresHomeComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    HttpClientModule
  ]
})
export class StoresModule { }
