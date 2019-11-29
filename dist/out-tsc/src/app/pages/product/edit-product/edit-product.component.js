import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ProductService } from '../product.service';
import { Router } from "@angular/router";
let EditProductComponent = class EditProductComponent {
    constructor(formBuilder, router, productService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.productService = productService;
        this.submitted = false;
    }
    ngOnInit() {
        let productId = localStorage.getItem("productId");
        if (!productId) {
            alert("Something wrong!");
            this.router.navigate(['']);
            return;
        }
        this.editForm = this.formBuilder.group({
            _id: [],
            title: ['', Validators.required],
            description: ['', Validators.required],
            price: ['', Validators.required],
            company: ['', Validators.required]
        });
        this.productService.getProductById(productId).subscribe(data => {
            console.log(data);
            this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
        });
    }
    // get the form short name to access the form fields
    get f() { return this.editForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.editForm.valid) {
            this.productService.updateProduct(this.editForm.value)
                .subscribe(data => {
                console.log(data);
                this.router.navigate(['']);
            });
        }
    }
};
EditProductComponent = tslib_1.__decorate([
    Component({
        selector: 'app-edit-product',
        templateUrl: './edit-product.component.html',
        styleUrls: ['./edit-product.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, Router, ProductService])
], EditProductComponent);
export { EditProductComponent };
//# sourceMappingURL=edit-product.component.js.map