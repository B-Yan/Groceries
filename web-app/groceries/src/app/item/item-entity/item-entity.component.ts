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

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.search().subscribe((response: any) => {this.items = response;});
  }
  public search() {
    return this.http.get('http://localhost:8080/api/items');
  }

  hasDiscount(item: any) {
    return  item > 0 ? this.isSale = true : this.isSale = false
  }


}


