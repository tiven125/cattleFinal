import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentLayoutPageComponent } from './content-layout-page.component';
const routes = [
    {
        path: '',
        component: ContentLayoutPageComponent,
        data: {
            title: 'Content Layout page'
        },
    }
];
let ContentPagesRoutingModule = class ContentPagesRoutingModule {
};
ContentPagesRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ContentPagesRoutingModule);
export { ContentPagesRoutingModule };
//# sourceMappingURL=content-pages-routing.module.js.map