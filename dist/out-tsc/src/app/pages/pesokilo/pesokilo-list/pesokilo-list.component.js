import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { PesokiloAPService } from '../pesokilo-ap.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
let PesokiloListComponent = class PesokiloListComponent {
    constructor(pesokiloAPService) {
        this.pesokiloAPService = pesokiloAPService;
        // Exporto los datos del archivo JSON a la  vista 
        this.rows = [];
        this.loadingIndicator = true;
        this.temp = [];
        // Table Column Titles
        this.columns = [
            { prop: 'kilogramos' },
        ];
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
    }
    ngOnInit() {
        this.getAllPesokilos();
    }
    getAllPesokilos() {
        this.pesokiloAPService.obtenerpesokilo().subscribe(dataFinal => {
            this.rows = dataFinal.pesokilo;
            this.temp = dataFinal.pesokilo;
            console.log(dataFinal.pesokilo);
        }, error => {
            console.log(error);
        });
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
};
tslib_1.__decorate([
    ViewChild(DatatableComponent, { static: false }),
    tslib_1.__metadata("design:type", DatatableComponent)
], PesokiloListComponent.prototype, "table", void 0);
PesokiloListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pesokilo-list',
        templateUrl: './pesokilo-list.component.html',
        styleUrls: ['./pesokilo-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [PesokiloAPService])
], PesokiloListComponent);
export { PesokiloListComponent };
//# sourceMappingURL=pesokilo-list.component.js.map