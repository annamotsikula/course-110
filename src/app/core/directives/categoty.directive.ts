import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Category } from '../interfaces/category.interface';

@Directive({ selector: '[category]', })
export class ProductCategoryDirective implements OnInit {
    @Input({ required: true }) category: string = 'None'

    private _colors: { [key in Category]: string } = {
        "beauty": '#FF33A1',
        "fragrances": '#FF573D',
        "furniture": '#FFC133',
        "groceries": '#B6FF33',
        "home-decoration": '#33FFBD',
        "kitchen-accessories": '#33FFF5',
        "laptops": '#5733FF',
        "mens-shirts": '#33FF99',
        "mens-shoes": '#FF8333',
        "mens-watches": '#C433FF',
        "mobile-accessories": '#33A1FF',
        "motorcycle": '#FF3344',
        "skin-care": '#FF3399',
        "smartphones": '#3357FF',
        "sports-accessories": '#DFFF33',
        "sunglasses": '#A133FF',
        "tablets": '#33E1FF',
        "tops": '#39FF33',
        "vehicle": '#FF5733',
        "womens-bags": '#FF33C4',
        "womens-dresses": '#FFAF33',
        "womens-jewellery": '#8D33FF',
        "womens-shoes": '#FF3366',
        "womens-watches": '#FF5733'
    }

    constructor(private _el: ElementRef) { }

    ngOnInit() {
        this.addCategoryChip();
    }

    addCategoryChip() {
        const span = (<HTMLSpanElement>this._el.nativeElement)
        span.innerText = this.category.toUpperCase();
        span.style.backgroundColor = this._colors[this.category as Category] || '#CCC'
    }



}