import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProductService } from '../services/products.service';
import { Product } from '../interfaces/product.interface';

export const productResolver: ResolveFn<Product[]> = (route, state) => {
  const productService = inject(ProductService);
  return productService.getProducts();
};

export const productItemResolver: ResolveFn<Product> = (route, state) => {
  const productService = inject(ProductService);
  const routerParams = route.paramMap.get("id")
  return productService.getSingleProduct(Number(routerParams));
};

 
// import { ProductService } from '../product/product.service';
 
// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsResolverService implements Resolve<any> {
//   constructor(private product: ProductService) {}
//   resolve(route: ActivatedRouteSnapshot): Observable<any> {
//     console.log('Called Get Product in resolver...', route);
//     return this.product.getProducts()
//   }
// }