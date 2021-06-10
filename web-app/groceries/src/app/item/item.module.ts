import { CartRoutingModule } from './../cart/cart-routing.module';
import { CartModule } from './../cart/cart.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemEntityComponent } from './item-entity/item-entity.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,CartRoutingModule
  ]
})
export class ItemModule { }
