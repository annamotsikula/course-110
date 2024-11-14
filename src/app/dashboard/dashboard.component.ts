import { Component } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import * as productList from '../core/list/product.list.json'
enum SHIPPING {
  STANDARD = 'standard extra 10 day shipping',
  EXPRESS = 'express'
}

interface Options {
  isWireless: boolean,
  hasWarranty: boolean,
  shippingMethod: SHIPPING
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  userName: string = 'johnDoe_123'

  products: Product[] = []



  ngOnInit() {
    this.products = this.getProducts();
  }



  getProducts(): Product[] {
    const json = productList;
    const list: any[] = JSON.parse(JSON.stringify(json)).default;
  
    // const newList = list.map(i => ({ ...i, 
    //   ratings: i.reviews.map((rev: any) => rev.rating) }))
    // console.log(newList[0]);

    return list

  }


}
