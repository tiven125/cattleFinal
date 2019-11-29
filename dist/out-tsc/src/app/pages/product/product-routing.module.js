import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
const routes = [
    {
        path: '',
        children: [
            {
                path: 'addproducto',
                component: AddProductComponent,
                data: {
                    title: ' addproducto'
                }
            },
            {
                path: 'editar',
                component: EditProductComponent,
                data: {
                    title: 'edit'
                }
            },
            {
                path: 'list',
                component: ListProductsComponent,
                data: {
                    title: 'list'
                }
            }
        ]
    }
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ProductRoutingModule);
export { ProductRoutingModule };
//# sourceMappingURL=product-routing.module.js.map