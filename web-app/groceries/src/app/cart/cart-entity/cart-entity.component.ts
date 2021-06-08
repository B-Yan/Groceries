import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-entity',
  templateUrl: './cart-entity.component.html',
  styleUrls: ['./cart-entity.component.css']
})
export class CartEntityComponent implements OnInit {

  items: any;

  constructor() { }

  ngOnInit(): void {
    let item1 = {id: 0, name: 'banana', qte: 1};
    let item2 = {id: 1, name: 'mapple syrup', qte: 20};
    let item3 = {id: 2, name: 'poutine', qte: 1};

    localStorage.setItem(item1.id+"", JSON.stringify(item1));
    localStorage.setItem(item2.id+"", JSON.stringify(item2));
    localStorage.setItem(item3.id+"", JSON.stringify(item3));

    this.items = new Array(localStorage.length);
    for(let i = 0 ; i<localStorage.length; i++){
      this.items[i] = JSON.parse(localStorage.getItem(localStorage.key(i)!)!);
    }
  }

  myString(item: any){
    return item;
  }

}
