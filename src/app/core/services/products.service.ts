import { Inject, Injectable } from "@angular/core";
import { DeleteProduct, Product, ProductResponse } from "../interfaces/product.interface";
import * as productList from '../list/product.list.json'
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable, ReplaySubject, Subject, tap } from "rxjs";
import { api_url_token } from "../constants/constants";


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private _productJson = productList;
    private _productList: Product[] = [];
    count: number = 0
    cartItems = new Subject<void>();
    cartItemCount = new BehaviorSubject<number>(this.count);

    productAdd = new ReplaySubject<number>(2)
    
    constructor(private _http: HttpClient, @Inject(api_url_token) private apiUrl: string) {
        const json = this._productJson;
        const list: any[] = JSON.parse(JSON.stringify(json)).default;
        this._productList = list
    }

    passSingleProduct() {
        this.productAdd.next(6)

        // this.productAdd.next(this._productList[this.count])
        // this.productAdd.next(this._productList[this.count])

    }
   
    getProducts(): Observable<Product[]> {
        return this._http.get<ProductResponse>(`${this.apiUrl}/products`).pipe(
            map(response => response.products),
        )
    }

    addProduct(product: Product | Partial<Product>) {
        const newProduct: Product | Partial<Product> = { ...product, id: this._productList.length + 1 };
        this._productList.unshift(newProduct as Product)
    }
    deleteProduct(id: number) {
        return this._http.delete<DeleteProduct>(`${this.apiUrl}/products/${id}`)
    }
    getSingleProduct(id: number): Product | undefined {
        const product = this._productList.find(i => i.id === id);
        return product ? product : undefined
    }
}