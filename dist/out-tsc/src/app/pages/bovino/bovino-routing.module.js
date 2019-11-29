import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BovinoListComponent } from './bovino-list/bovino-list.component';
import { BovinoCreateComponent } from './bovino-create/bovino-create.component';
import { BovinoEditComponent } from './bovino-edit/bovino-edit.component';
const routes = [
    {
        path: '',
        children: [
            {
                path: 'bovinolist',
                component: BovinoListComponent,
                data: {
                    title: 'bovino list'
                }
            },
            {
                path: 'bovinocreate',
                component: BovinoCreateComponent,
                data: {
                    title: 'bovino create'
                }
            },
            {
                path: 'bovinoedit',
                component: BovinoEditComponent,
                data: {
                    title: 'bovino edit'
                }
            }
        ]
    }
];
let BovinoRoutingModule = class BovinoRoutingModule {
};
BovinoRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], BovinoRoutingModule);
export { BovinoRoutingModule };
//# sourceMappingURL=bovino-routing.module.js.map