import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GanaderoCreateComponent } from './ganadero-create/ganadero-create.component';
import { GanaderoListComponent } from './ganadero-list/ganadero-list.component';
const routes = [
    {
        path: '',
        children: [
            {
                path: 'ganaderocreate',
                component: GanaderoCreateComponent,
                data: {
                    title: 'ganadero create'
                }
            },
            {
                path: 'ganaderolist',
                component: GanaderoListComponent,
                data: {
                    title: 'ganadero list'
                }
            }
        ]
    }
];
let GanaderoRoutingModule = class GanaderoRoutingModule {
};
GanaderoRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], GanaderoRoutingModule);
export { GanaderoRoutingModule };
//# sourceMappingURL=ganadero-routing.module.js.map