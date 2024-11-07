import { AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../app.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  product: Product = {
    price: 100,
    title: 'Wireless Headphones',
    color: 'Grey',
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
  }

  ratingSum!: string

  calculatRating(ratings: number[]): string {
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return (total / ratings.length).toFixed(1);
  }

  ngOnInit(): void {
    this.ratingSum = this.calculatRating(this.product.rating)
    console.log('OnInit')
  }
 
}

