import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ContentPagesRoutingModule } from "./content-pages-routing.module";
import { ContentLayoutPageComponent } from './content-layout-page.component';
let ContentPagesModule = class ContentPagesModule {
};
ContentPagesModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            ContentPagesRoutingModule,
            FormsModule
        ],
        declarations: [
            ContentLayoutPageComponent
        ]
    })
], ContentPagesModule);
export { ContentPagesModule };
//# sourceMappingURL=content-pages.module.js.map