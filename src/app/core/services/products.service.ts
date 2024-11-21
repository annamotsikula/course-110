import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import * as productList from '../list/product.list.json'


@Injectable()
export class ProductService {
    private _productJson = productList;
    private _productList: Product[] = []
    constructor() {
        const json = this._productJson;
        const list: any[] = JSON.parse(JSON.stringify(json)).default;
        this._productList = list
    }

    getProducts(): Product[] {
        return this._productList
    }

    addProduct(product: Product | Partial<Product>) {
        const newProduct: Product | Partial<Product> = { ...product, id: this._productList.length + 1 };
        this._productList.unshift(newProduct as Product)
    }
    deleteProduct(id: number) {
        const index = this._productList.findIndex(i => i.id === id);
        if (index > -1) {
            this._productList.splice(index, 1)
        }
    }
}