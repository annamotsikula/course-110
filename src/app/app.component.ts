import { Component } from '@angular/core';
import { Product } from './app.interface';

enum SHIPPING {
  STANDARD = 'standard extra 10 day shipping',
  EXPRESS= 'express'
}

interface Options {
  isWireless: boolean,
  hasWarranty: boolean,
  shippingMethod: SHIPPING
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userName: string = 'johnDoe_123'
  newProduct: Product = {
    price: 900,
    title: 'Wireless Mouse',
    color: 'Black',
    model: 'HP',
    thumbnail: "https://us.technics.com/cdn/shop/products/sbu-2021-a800-galleryimages-2-211208.png?v=1654793381",
    inStock: true,
    tags: [],
    description: 'High-quality Bluetooth headphones with noise cancellation',
    dimensions: {
      width: 350,
      height: 250
    },
    rating: [5, 4, 5, 3, 4],
    id: 346,
  }
  anotherProduct: Product = {
    price: 100,
    title: 'Essence Mascara Lash Princess',
    color: 'Blue',
    id: 468,
    model: 'HP',
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    inStock: true,
    tags: [],
    description: 'The Essence Mascara Lash Princess is a popular mascara known for ...',
    dimensions: {
      width: 350,
      height: 250
    },
    rating: [5, 3, 1, 2, 4],
  }
  extraOptions: Options = {
    isWireless: true,
    hasWarranty: false,
    shippingMethod: SHIPPING.STANDARD
  }

  checkoutData = {
    id: 0
  }

  getInfo() {
    if (this.userName === '') { alert('Fill your username'); return }
    console.log(`Options: Warranty: ${this.extraOptions.hasWarranty}, 
      Wireless: ${this.extraOptions.isWireless},
      Shipping Method: ${this.extraOptions.shippingMethod},
      Username: ${this.userName}
      `)
  }

  changeShipping() {
    this.extraOptions.shippingMethod = SHIPPING.EXPRESS
  }
  setUserName(event: Event) {
    const elem = event.target as HTMLInputElement
    this.userName = elem.value
  }

  checkOut(id: number) {
    console.log(id);
    this.checkoutData.id = id
  }
  displayMsg(msg: string|number|boolean) {
    console.log(msg)
  }


}