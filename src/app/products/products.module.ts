import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { LowstockDirective } from '../core/directives/lowstock.directive';
import { TruncatePipe } from '../core/pipes/truncate.pipe';
import { ProductsComponent } from '../products/products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from '../core/services/products.service';
import { ProductCategoryDirective } from '../core/directives/categoty.directive';

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
        component: ProductDetailsComponent
    }
]

@NgModule({
    declarations: [
        ...components,
        ...pipes,
        ...directives,
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
    ],
    exports: [
        ...pipes,
        ...directives,
        RouterModule
    ],
    providers: [ProductService]
})
export class ProductsModule { }
