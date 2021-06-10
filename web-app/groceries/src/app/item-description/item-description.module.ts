import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDescriptionRoutingModule } from './item-description-routing.module';
import { ItemDescriptionEntityComponent } from './item-description-entity/item-description-entity.component';


@NgModule({
  declarations: [
    ItemDescriptionEntityComponent
  ],
  imports: [
    CommonModule,
    ItemDescriptionRoutingModule
  ]
})
export class ItemDescriptionModule { }
