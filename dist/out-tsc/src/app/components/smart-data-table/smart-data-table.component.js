import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import * as tableData from '../../shared/data/smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartDataTableService } from './smart-data-table.service';
let SmartDataTableComponent = class SmartDataTableComponent {
    constructor(smartDataTableService) {
        this.smartDataTableService = smartDataTableService;
        this.listaPesoKilo = [];
        this.settings = tableData.settings;
        this.filtersettings = tableData.filtersettings;
        this.source = new LocalDataSource(tableData.data); // create the source
        this.filterSource = new LocalDataSource(tableData.filerdata); // create the source
        this.listaPesoKilo = new LocalDataSource(); // create the source
    }
    //alertsettings = tableData.alertsettings;
    ngOnInit() {
        this.getAllPesokilos();
    }
    getAllPesokilos() {
        this.smartDataTableService.obtenerpesokilo().subscribe(dataFinal => {
            this.listaPesoKilo = dataFinal.pesokilo;
            console.log(dataFinal.pesokilo);
        }, error => {
            console.log(error);
        });
    }
    // And the listener code which asks the DataSource to filter the data:
    onSearch(query = '') {
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: 'id',
                search: query,
            },
            {
                field: 'name',
                search: query,
            },
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search 
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    }
};
SmartDataTableComponent = tslib_1.__decorate([
    Component({
        selector: 'app-smart-data-table',
        templateUrl: './smart-data-table.component.html',
        styleUrls: ['./smart-data-table.component.scss'],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [SmartDataTableService])
], SmartDataTableComponent);
export { SmartDataTableComponent };
//# sourceMappingURL=smart-data-table.component.js.map