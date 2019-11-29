import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
let HomeModule = class HomeModule {
};
HomeModule = tslib_1.__decorate([
    NgModule({
        declarations: [HomeComponent],
        imports: [
            CommonModule, HomeRoutingModule, NgbModule
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map