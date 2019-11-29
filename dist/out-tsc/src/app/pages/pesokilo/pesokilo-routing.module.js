import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PesokiloCreateComponent } from './pesokilo-create/pesokilo-create.component';
import { PesokiloListComponent } from './pesokilo-list/pesokilo-list.component';
import { PesokiloEditComponent } from './pesokilo-edit/pesokilo-edit.component';
const routes = [
    {
        path: '',
        children: [
            {
                path: 'pesokilolist',
                component: PesokiloListComponent,
                data: {
                    title: 'pesokilo list'
                }
            },
            {
                path: 'pesokilocreate',
                component: PesokiloCreateComponent,
                data: {
                    title: 'pesokilo create'
                }
            },
            {
                path: 'pesokiloedit',
                component: PesokiloEditComponent,
                data: {
                    title: 'pesokilo edit'
                }
            }
        ]
    }
];
let PesokiloRoutingModule = class PesokiloRoutingModule {
};
PesokiloRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PesokiloRoutingModule);
export { PesokiloRoutingModule };
//# sourceMappingURL=pesokilo-routing.module.js.map