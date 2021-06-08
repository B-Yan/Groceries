import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartEntityComponent } from './cart-entity/cart-entity.component';

const routes: Routes = [
  {path: 'cart', component: CartEntityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
