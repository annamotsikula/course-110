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


  constructor(private productService: ProductService) {}


  ngOnInit() {
    this.getProducts().subscribe()
  }

  getProducts(): Observable<Product[]> {
    return this.productService.getProducts().pipe(
      tap(result => this.products = result)
    )
  }
  addToCart() {}


  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe()
  }


}
