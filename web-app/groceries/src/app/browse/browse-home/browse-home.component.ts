import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-browse-home',
  templateUrl: './browse-home.component.html',
  styleUrls: ['./browse-home.component.css']
})
export class BrowseHomeComponent implements OnInit {

  categories: any;
  items: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCategories().subscribe((response: any) => {this.categories = response;});
  }

  getCategories() {
    return this.http.get('http://localhost:8080/api/categories');
  }

  // TO-DO: update UI for filtered items
  getItemsInCategory(categoryId: number) {
    this.http.get('http://localhost:8080/api/' + categoryId).subscribe((response: any) => {this.items = response;});
    console.log(this.items);
  }

  // TO-DO: reuse impl for sales page
  seeAllSales(): void {
    location.href = "/sales";
  }
}
