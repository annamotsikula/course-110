import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  private _actRoute = inject(ActivatedRoute)

  product: Product
  ratingStars: string[] = []
  constructor() {
    this.product = this._actRoute.snapshot.data['item'];
      this.ratingStars = this.getStars(this.product.rating);
  }

  getStars(rating: number): string[] {
    const classList: string[] = []
    const fullStars = Math.floor(rating);
    const reminder = rating - fullStars
    const halfStars = reminder !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    for (let i = 0; i < fullStars; i++) {
      classList.push('bi-star-fill')
    }

    halfStars && classList.push('bi-star-half');

    for (let i = 0; i < emptyStars; i++) {
      classList.push('bi-star')
    }

    return classList
  }
}
