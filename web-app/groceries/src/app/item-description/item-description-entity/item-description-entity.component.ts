import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-description-entity',
  templateUrl: './item-description-entity.component.html',
  styleUrls: ['./item-description-entity.component.css']
})
export class ItemDescriptionEntityComponent implements OnInit {

  item:any;
  category:any;
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params=>{
                                                          
                                                          let itemID = params['item'];
                                                          console.log(itemID);
                                                          this.http.get<string>("http://localhost:8080/api/itembyid/" + itemID).subscribe((response)=> { this.item=response;});
                                                          this.http.get<string>("http://localhost:8080/api/categoryofitem/" + itemID).subscribe((response)=> {this.category=response}); 

                                                      })
    
  }

  ngOnInit(): void 
  {
    /*
    var keys= this.activatedRoute.snapshot.queryParamMap.keys;
    for(let i=0;i<keys.length;i++)
    {
      console.log(keys[i]);
    }
    */

  }

}
