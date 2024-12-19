import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LowstockDirective } from '../core/directives/lowstock.directive';
import { TruncatePipe } from '../core/pipes/truncate.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from '../core/services/products.service';
import { ProductCategoryDirective } from '../core/directives/categoty.directive';
import { ProductsComponent } from './product-list/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CardComponent } from './card/card.component';
import { SharedComponentsModule } from '../core/components/components.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { api_url_token } from '../core/constants/constants';
import { productItemResolver } from '../core/resolvers/product.resolver';

const directives = [LowstockDirective, ProductCategoryDirective];
const pipes = [TruncatePipe];
const components = [
    ProductsComponent,
    ProductDetailsComponent,
    CardComponent
];

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: ':id',
        component: ProductDetailsComponent,
        resolve: { item: productItemResolver },
    }
]

@NgModule({
    declarations: [
        ...components,
        ...pipes,
        ...directives,
        ProductAddComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        SharedComponentsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...pipes,
        ...directives,
        RouterModule
    ],
    // providers: [ProductService]
})
export class ProductsModule { }
