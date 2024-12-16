import { Component, inject } from '@angular/core';
import { ProductService } from '../core/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  // providers: [ProductService]
})
export class HeaderComponent {
  productService = inject(ProductService);

  logOut() {
    
  }


}
