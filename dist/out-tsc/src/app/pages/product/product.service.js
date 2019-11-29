import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.baseurl = "http://localhost:3000/";
    }
    getAllProducts() {
        return this.http.get(this.baseurl + 'Products');
    }
    getProductById(id) {
        return this.http.get(this.baseurl + 'Products' + '/' + id);
    }
    addProduct(product) {
        return this.http.post(this.baseurl + 'Products', product);
    }
    deleteProduct(id) {
        return this.http.delete(this.baseurl + 'Products' + '/' + id);
    }
    updateProduct(product) {
        return this.http.put(this.baseurl + 'Products' + '/' + product._id, product);
    }
};
ProductService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map