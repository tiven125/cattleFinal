import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ProductService } from '../product.service';
import { Router } from "@angular/router";
let AddProductComponent = class AddProductComponent {
    constructor(formBuilder, router, productService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.productService = productService;
        this.submitted = false;
    }
    ngOnInit() {
        this.addForm = this.formBuilder.group({
            _id: [],
            title: ['', Validators.required],
            description: ['', Validators.required],
            price: ['', Validators.required],
            company: ['', Validators.required]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.addForm.valid) {
            this.productService.addProduct(this.addForm.value)
                .subscribe(data => {
                console.log(data);
                this.router.navigate(['']);
            });
        }
    }
    // get the form short name to access the form fields
    get f() { return this.addForm.controls; }
};
AddProductComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-product',
        templateUrl: './add-product.component.html',
        styleUrls: ['./add-product.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, Router, ProductService])
], AddProductComponent);
export { AddProductComponent };
//# sourceMappingURL=add-product.component.js.map