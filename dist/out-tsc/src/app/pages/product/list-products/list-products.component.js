import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from '../product.service';
let ListProductsComponent = class ListProductsComponent {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ngOnInit() {
        this.getAllProducts();
    }
    getAllProducts() {
        this.productService.getAllProducts().subscribe(data => {
            this.products = data;
        });
    }
    ;
    addProduct() {
        this.router.navigate(['add-product']);
    }
    deleteProduct(product) {
        this.productService.deleteProduct(product._id).subscribe(data => {
            console.log(data);
            this.getAllProducts();
        });
    }
    updateProduct(product) {
        localStorage.removeItem("productId");
        localStorage.setItem("productId", product._id);
        this.router.navigate(['/product/editar']);
    }
};
ListProductsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-list-products',
        templateUrl: './list-products.component.html',
        styleUrls: ['./list-products.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ProductService, Router])
], ListProductsComponent);
export { ListProductsComponent };
//# sourceMappingURL=list-products.component.js.map