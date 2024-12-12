import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../core/services/products.service';
import { switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  // providers: [ProductService]
})
export class HeaderComponent {
  productService = inject(ProductService);

  ngOnInit() {
   const listentoChanges =  this.productService.productAdd.asObservable();
   listentoChanges.subscribe((value) => console.log(value));
  }

}
