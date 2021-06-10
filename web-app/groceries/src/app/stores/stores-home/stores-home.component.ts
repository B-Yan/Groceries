import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stores-home',
  templateUrl: './stores-home.component.html',
  styleUrls: ['./stores-home.component.css']
})
export class StoresHomeComponent implements OnInit {
  
  stores: any;
  hours: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {  
    this.getStores().subscribe((response: any) => {this.stores = response;});
    this.getHours().subscribe((response: any) => {this.hours = response;});
  }

  getStores() {
    return this.http.get('http://localhost:8080/api/stores');
  }

  getHours(){
    return this.http.get('http://localhost:8080/api/storeHours');
  }

  storeIsOpen(storeId: number){
    let date = new Date();
    return date.getTime() < this.closeAt(storeId).getTime() && date.getTime() > this.openAt(storeId).getTime();
  }

  getTodaySchedule(storeId: number){
    for (let i = 0; i<this.hours.length; i++){
      if(this.hours[i].id == storeId){
        let date = new Date();
        for(let j = 0; j<this.hours[i].times.length; j++){
          if(this.hours[i].times[j].day == date.getDay()-1){
            return this.hours[i].times[j]
          }
        }
      }
    }
    return null;
  }

  getHourFromWeirdFormat(weirdFormat: any){
    let date = new Date();
    let isPm = weirdFormat.split(" ")[1] == "pm";
    let time = weirdFormat.split(" ")[0];
    if (isPm){
      date.setHours(12 + parseInt(time.split(":")[0]));
    } else {
      date.setHours(parseInt(time.split(":")[0]));
    }
    date.setMinutes(parseInt(time.split(":")[1]));
    return date;
  }

  closeAt(storeId: number): Date{
    return this.getHourFromWeirdFormat(this.getTodaySchedule(storeId).close);
  }

  openAt(storeId: number): Date{
    return this.getHourFromWeirdFormat(this.getTodaySchedule(storeId).open);
  }
}
