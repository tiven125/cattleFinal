import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesokiloCreateComponent } from './pesokilo-create/pesokilo-create.component';
import { PesokiloListComponent } from './pesokilo-list/pesokilo-list.component';
import { PesokiloEditComponent } from './pesokilo-edit/pesokilo-edit.component';
import { PesokiloRoutingModule } from './pesokilo-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
let PesokiloModule = class PesokiloModule {
};
PesokiloModule = tslib_1.__decorate([
    NgModule({
        declarations: [PesokiloCreateComponent, PesokiloListComponent, PesokiloEditComponent],
        imports: [
            CommonModule,
            PesokiloRoutingModule,
            ReactiveFormsModule,
            FormsModule,
            NgxSpinnerModule,
            NgxDatatableModule,
        ]
    })
], PesokiloModule);
export { PesokiloModule };
//# sourceMappingURL=pesokilo.module.js.map