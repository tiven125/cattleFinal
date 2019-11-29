import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BovinoListComponent } from './bovino-list/bovino-list.component';
import { BovinoRoutingModule } from './bovino-routing.module';
import { BovinoCreateComponent } from './bovino-create/bovino-create.component';
import { BovinoEditComponent } from './bovino-edit/bovino-edit.component';
let BovinoModule = class BovinoModule {
};
BovinoModule = tslib_1.__decorate([
    NgModule({
        declarations: [BovinoListComponent, BovinoCreateComponent, BovinoEditComponent],
        imports: [
            CommonModule,
            BovinoRoutingModule,
            HttpClientModule,
            FormsModule,
            NgxDatatableModule,
            NgxSpinnerModule
        ]
    })
], BovinoModule);
export { BovinoModule };
//# sourceMappingURL=bovino.module.js.map