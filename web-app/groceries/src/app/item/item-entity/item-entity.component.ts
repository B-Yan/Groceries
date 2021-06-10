import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-entity',
  templateUrl: './item-entity.component.html',
  styleUrls: ['./item-entity.component.css']
})
export class ItemEntityComponent {

  @Input() items: any = [];
  isSale: boolean = true;
  isVisible = 'none';

  constructor(private http: HttpClient,private router:Router ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.items = changes.items.currentValue;
  }

  hasDiscount(item: any) {
    return  item > 0 ? this.isSale = true : this.isSale = false
  }
  newPrice(item:any){
    return item.price*(1-item.percentageOFF)
  }

  itVisible(item: any) {
    console.log(this.isVisible, item.percentageOFF)
    return  item > 0 ? this.isVisible = 'block' : this.isVisible = 'none'
  }

  itemDescription(itemID:number) {
    var url = "/items";
    this.router.navigate([url], {queryParams: {item:itemID}});
  }
}


