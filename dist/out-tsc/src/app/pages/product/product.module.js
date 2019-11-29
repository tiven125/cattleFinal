import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
let ProductModule = class ProductModule {
};
ProductModule = tslib_1.__decorate([
    NgModule({
        declarations: [AddProductComponent, EditProductComponent, ListProductsComponent],
        imports: [
            CommonModule,
            ProductRoutingModule,
            HttpClientModule,
            ReactiveFormsModule,
            FormsModule
        ]
    })
], ProductModule);
export { ProductModule };
//# sourceMappingURL=product.module.js.map