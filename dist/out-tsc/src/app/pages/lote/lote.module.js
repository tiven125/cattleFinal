import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoteCreateComponent } from './lote-create/lote-create.component';
import { LoteListComponent } from './lote-list/lote-list.component';
import { LoteEditComponent } from './lote-edit/lote-edit.component';
import { LoteRoutingModule } from './lote-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
let LoteModule = class LoteModule {
};
LoteModule = tslib_1.__decorate([
    NgModule({
        declarations: [LoteCreateComponent, LoteListComponent, LoteEditComponent],
        imports: [
            CommonModule,
            LoteRoutingModule,
            ReactiveFormsModule,
            FormsModule,
            NgxSpinnerModule,
            NgxDatatableModule
        ]
    })
], LoteModule);
export { LoteModule };
//# sourceMappingURL=lote.module.js.map