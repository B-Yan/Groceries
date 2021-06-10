import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-description-entity',
  templateUrl: './item-description-entity.component.html',
  styleUrls: ['./item-description-entity.component.css']
})
export class ItemDescriptionEntityComponent implements OnInit {

  item:any;
  category:any;
  url: string = 'http://localhost:8080/api'
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute, private router:Router) {
    this.activatedRoute.queryParams.subscribe(params=>{
                                                          
                                                          let itemID = params['item'];
                                                          console.log(itemID);
                                                          this.http.get<string>(this.url+"/itembyid/" + itemID).subscribe((response)=> { this.item=response;});
                                                          this.http.get<string>(this.url+"/categoryofitem/" + itemID).subscribe((response)=> {this.category=response}); 

                                                      })
    
  }

  addToCart(iid: number, iname: string, iprice: number, percentageOFF: number){
    let jprice = iprice * (1-percentageOFF);
    let item = {id: iid, name: iname, qte: 1, price: jprice};
    localStorage.setItem(iid+"", JSON.stringify(item));
    alert(iname + " has been added to cart!");
    this.router.navigate(['/browse']);
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
