import { Component } from '@angular/core';
import { ProductService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',

})
export class ProductsComponent {
  userName: string = 'johnDoe_123'
  displayAddForm: boolean = false

  products$: Observable<Product[]>


  constructor(private productService: ProductService) {
    this.products$ = this.getProducts()
  }

  getProducts(): Observable<Product[]> {
    return this.productService.getProducts()
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe()
  }


}
