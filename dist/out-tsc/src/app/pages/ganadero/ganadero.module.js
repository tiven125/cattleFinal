import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { GanaderoRoutingModule } from './ganadero-routing.module';
import { GanaderoCreateComponent } from './ganadero-create/ganadero-create.component';
import { GanaderoListComponent } from './ganadero-list/ganadero-list.component';
import { GanaderoEditComponent } from './ganadero-edit/ganadero-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
let GanaderoModule = class GanaderoModule {
};
GanaderoModule = tslib_1.__decorate([
    NgModule({
        declarations: [GanaderoCreateComponent, GanaderoListComponent, GanaderoEditComponent],
        imports: [
            GanaderoRoutingModule,
            FormsModule,
            HttpClientModule,
            CommonModule,
            NgxDatatableModule,
            NgxSpinnerModule
        ]
    })
], GanaderoModule);
export { GanaderoModule };
//# sourceMappingURL=ganadero.module.js.map