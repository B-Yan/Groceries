import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item-entity',
  templateUrl: './item-entity.component.html',
  styleUrls: ['./item-entity.component.css']
})
export class ItemEntityComponent implements OnInit {

  items: any;
  isSale: boolean = true;
  isVisible = 'none';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.search().subscribe((response: any) => {this.items = response;});
  }
  public search() {
    return this.http.get('http://localhost:8090/api/items');
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




}


