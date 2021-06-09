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
    //this.search().subscribe((response: any) => {
      //this.stores = response.query.search;
    //});

    $.support.cors = true;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/api/stores',
      success: function(storeArray) {
        console.log(storeArray);
        this.stores = new Array(storeArray.length);
        for (let i = 0; i<storeArray.length; i++){
          var stor = {name: storeArray[i].name, address: storeArray[i].address, phone: storeArray[i].phoneNumber};
          this.stores[i] = stor;
        }
      },
      error: function() {
          alert("CAN'T CONNECT TO DATABSE!");
      }
  })

    //let store1 = {name: 'Test1', openAt: 11, closeAt: 20, address: '1111 Test Street', phone: '123 113-412'};
    //let store2 = {name: 'Test2', openAt: 15, closeAt: 22, address: '2222 Test Drive', phone: '222 123-432'};
    //this.stores = [store1, store2];
  }

  storeIsOpen(openAt: number, closeAt:number): boolean{
    var date = new Date();
    return openAt <= date.getHours() && date.getHours() < closeAt;
  }

  //public search() {
    //return this.http.get('localhost:8080/api/stores', {
      //params: {
        //action: 'GET',
        //format: 'json'
      //}
    //});
  //}
}
