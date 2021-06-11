import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from "@angular/router";


@Component({
  selector: 'app-home-home',
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.css']
})
export class HomeHomeComponent implements OnInit {

  url: string = 'http://localhost:8090/api'

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  getFeaturedSaleItems(categoryId: number) {
    this.http.get(this.url+'/sales/'+categoryId).subscribe((response: any) => {
      const queryParams: any = {};
      queryParams.featuredItems = JSON.stringify(response);
      const navigationExtras: NavigationExtras = { queryParams };

      this.router.navigate(['/browse'], navigationExtras);
    });
  }
}
