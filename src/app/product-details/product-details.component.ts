import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../core/services/products.service';
import { Product } from '../core/interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  private _actRoute = inject(ActivatedRoute)
  private _productService = inject(ProductService)

  product: Product | undefined

  constructor() {
    console.log(this._actRoute.snapshot)
    const param = this._actRoute.snapshot.paramMap.get('id');
    if (param) this.product = this._productService.getSingleProduct(Number(param))
  }
}
