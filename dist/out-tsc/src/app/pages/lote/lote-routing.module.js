import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoteCreateComponent } from './lote-create/lote-create.component';
import { LoteEditComponent } from './lote-edit/lote-edit.component';
import { LoteListComponent } from './lote-list/lote-list.component';
const routes = [
    {
        path: '',
        children: [
            {
                path: 'lotelist',
                component: LoteListComponent,
                data: {
                    title: 'lote list'
                }
            },
            {
                path: 'lotecreate',
                component: LoteCreateComponent,
                data: {
                    title: 'lote create'
                }
            },
            {
                path: 'loteedit',
                component: LoteEditComponent,
                data: {
                    title: 'lote edit'
                }
            }
        ]
    }
];
let LoteRoutingModule = class LoteRoutingModule {
};
LoteRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LoteRoutingModule);
export { LoteRoutingModule };
//# sourceMappingURL=lote-routing.module.js.map