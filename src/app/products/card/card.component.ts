import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../core/interfaces/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit, OnChanges {
  @Input({required: true}) product!: Product
  @Output() productSum: EventEmitter<number> = new EventEmitter<number>();
  @Output() message: EventEmitter<string|number|boolean> = new EventEmitter<string|number|boolean>();

  router = inject(Router)
 
  constructor(private _route: ActivatedRoute) {

  }
  
ngOnChanges(changes: SimpleChanges): void {
  // console.log(changes)
  
}
  ratingSum!: string

  calculatRating(ratings: number[]): string {
    console.log(ratings)
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return (total / ratings.length).toFixed(1);
  }

  ngOnInit(): void {

   
  }

  redirect() {
    console.log('The product id is: ', this.product.id)
    this.router.navigate([`./${this.product.id}`], {relativeTo: this._route})
  }

  

}

