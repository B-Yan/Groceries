import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDescriptionEntityComponent } from './item-description/item-description-entity/item-description-entity.component';

const routes: Routes = [{path:"items",component:ItemDescriptionEntityComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
