import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-stores-home',
  templateUrl: './stores-home.component.html',
  styleUrls: ['./stores-home.component.css']
})
export class StoresHomeComponent implements OnInit {
  
  stores: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {  
    this.search().subscribe((response: any) => {this.stores = response;});
  }

  public search() {
    return this.http.get('http://localhost:8080/api/stores');
  }

  storeIsOpen(openAt: number, closeAt:number): boolean{
    var date = new Date();
    return openAt <= date.getHours() && date.getHours() < closeAt;
  }
}
