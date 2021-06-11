import { HttpClient } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart-entity',
  templateUrl: './cart-entity.component.html',
  styleUrls: ['./cart-entity.component.css']
})
export class CartEntityComponent implements OnInit {
  items: any;
  salesId: any;
  url: string = 'http://localhost:8090/api/newSale';


  constructor(private http: HttpClient) { }

  //TODO better verification of the data type before displaying info and before adding values

  ngOnInit(): void {
    this.items = new Array();
    this.updateItems();
    this.getId().subscribe((response: any) => {this.salesId = response;});
  }

  getId(){
    return this.http.get(this.url);
  }

  postData(){
    let myItemSummary:number[][] = new Array();
    for(let i = 0; i<this.items.length; i++){ 
      if(this.items[i].qte != undefined){myItemSummary.push([this.items[i].id, this.items[i].qte]);}
    }
    let myItems = {id: this.salesId, values: myItemSummary};
    return this.http.post(this.url, myItems);
  }

  openPaypal(){
    this.postData().subscribe((response: any) => {});
    this.getId().subscribe((response: any) => {this.salesId = response;});
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
    this.items = new Array();
    for(let i = 0 ; i<localStorage.length; i++){
      let val = JSON.parse(localStorage.getItem(localStorage.key(i)!)!);
      if(val.qte != undefined){
        this.items.push(val);
      }
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
    this.updateItems();
  }

}
