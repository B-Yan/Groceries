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
    // let item1 = { name: 'bread', description: "gggggg", price: 20, percentage: 15, image: "https://xantilicious.com/wp-content/uploads/2017/07/for-site-2.jpg" };
    // let item2 = { name: 'chocolat', description: "nnnnn", price: 25, percentage: 0, image: "https://www.verywellhealth.com/thmb/z_yZ7nLLa9KQmswEFMD6wnJ6a_0=/700x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dark-chocolate-1047006834-5be04170c9e77c0051d759b3.jpg" };
    // this.items = [item1, item2];    

    this.search().subscribe((response: any) => {this.items = response;});

  }
  public search() {
    return this.http.get('http://localhost:8080/api/items');
  }

  hasDiscount(item: any) {  
    return  item > 0 ? this.isSale = true : this.isSale = false
  }


}


