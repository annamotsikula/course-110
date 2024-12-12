import { Component, Inject } from '@angular/core';
import { ProductService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product.interface';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',

})
export class ProductsComponent {
  userName: string = 'johnDoe_123'
  displayAddForm: boolean = false

  products: Product[] = [];

  // newProductInput = {
  //   title: '',
  //   price: 0,
  //   description: '',
  //   category: ''
  // }


  constructor(private productService: ProductService) {
    this.productService.productAdd.subscribe((respn) => {
  
    })

  }
  countVar = 0
  add() {
    this.productService.passSingleProduct()
    // this.productService.cartItems.next()
    // this.productService.cartItemCount.next(++this.productService.count)


  }

  ngOnInit() {
    this.getProducts().subscribe()
  }

  getProducts(): Observable<Product[]> {
    return this.productService.getProducts().pipe(
      tap(result => this.products = result)
    )
  }

  // addNewProduct() {
  //   if (this.newProductInput.title && this.newProductInput.price) {
  //     const newProduct: Partial<Product> = {
  //       ...this.newProductInput,
  //       rating: [5],
  //       thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
  //       model: 'XYZ-123'
  //     }
  //     this.productService.addProduct(newProduct);
  //     this.displayAddForm = false
  //   } else {
  //     alert('Fill mandatory fields')
  //   }


  // }

  deleteProduct(id: number) {
    // this.productService.deleteProduct(id)
  }


}
