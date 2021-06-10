import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart-entity',
  templateUrl: './cart-entity.component.html',
  styleUrls: ['./cart-entity.component.css']
})
export class CartEntityComponent implements OnInit {
  items: any;
  itemsLength: any;

  constructor() { }

  //TODO add the cost of each product, add the total cost per product, add the cart total and a paypal link

  ngOnInit(): void {
    this.items = new Array(localStorage.length);
    this.itemsLength = this.items.length;
    this.updateItems();
  }

  cartTotal(){
    let total = 0;
    for(let i = 0 ; i<localStorage.length; i++){
      let item = JSON.parse(localStorage.getItem(localStorage.key(i)!)!);
      total += item.qte*item.price;
    }
    return total;
  }

  updateItems(){
    for(let i = 0 ; i<localStorage.length; i++){
      this.items[i] = JSON.parse(localStorage.getItem(localStorage.key(i)!)!);
    }
  }

  add(itemId: number){
    let newItem = JSON.parse(localStorage.getItem(itemId+"")!);
    newItem.qte++;
    localStorage.setItem(newItem.id+"", JSON.stringify(newItem));
    this.updateItems();
  }

  remove(itemId: number){
    let newItem = JSON.parse(localStorage.getItem(itemId+"")!);
    newItem.qte--;
    localStorage.setItem(newItem.id+"", JSON.stringify(newItem));
    if (newItem.qte == 0){this.delete(itemId);}
    this.updateItems();
  }

  delete(itemId: number){
    localStorage.removeItem(itemId+"");
    this.itemsLength--;
    this.items[this.itemsLength] = null;
    this.updateItems();
  }

}
