import { Inject, Injectable } from "@angular/core";
import { DeleteProduct, Product, ProductResponse } from "../interfaces/product.interface";
import * as productList from '../list/product.list.json'
import { HttpBackend, HttpClient } from "@angular/common/http";
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


    
    constructor(private _http: HttpClient, @Inject(api_url_token) private apiUrl: string, private _httpBackend: HttpBackend) {
        const json = this._productJson;
        const list: any[] = JSON.parse(JSON.stringify(json)).default;
        this._productList = list
    
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
        // USing HttpBackend removes req from current interceptor chain 
        const newReq = new HttpClient(this._httpBackend).delete<DeleteProduct>(`${this.apiUrl}/products/${id}`)
        return newReq 
    }
    getSingleProduct(id: number) {
        return this._http.get<Product>(`${this.apiUrl}/products/${id}`)
        // const product = this._productList.find(i => i.id === id);
        // return product ? product : undefined
    }
}