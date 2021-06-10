import {Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-browse-home',
  templateUrl: './browse-home.component.html',
  styleUrls: ['./browse-home.component.css']
})
export class BrowseHomeComponent implements OnInit {

  categories: any = [];
  items: any = [];
  url: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    const featuredItems = this.route.snapshot.queryParamMap.get('featuredItems');
    if (featuredItems !== null) {
      this.items = JSON.parse(featuredItems);
      console.log("FEATURED ITEMS", this.items);
    }
  }

  ngOnInit(): void {
    if (this.items.length == 0) {
      this.getAllItems().subscribe((response: any) => {this.items = response;});
    }
    this.getCategories().subscribe((response: any) => {this.categories = response;});
  }

  getAllItems() {
    return this.http.get(this.url+'/items');
  }

  getCategories() {
    return this.http.get(this.url+'/categories');
  }

  getSaleItems() {
    this.http.get(this.url+'/sales').subscribe((response: any) => {this.items = response;});
  }

  getItemsInCategory(categoryId: number) {
    this.http.get(this.url+'/' + categoryId).subscribe((response: any) => {this.items = response;});
  }
}
