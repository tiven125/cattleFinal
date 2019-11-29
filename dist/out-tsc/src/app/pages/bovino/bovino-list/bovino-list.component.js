import * as tslib_1 from "tslib";
//student-list.component.ts
import { Component } from '@angular/core';
import { BovinoApiService } from '../bovino-api.service';
let BovinoListComponent = class BovinoListComponent {
    constructor(bovinoApiService) {
        this.bovinoApiService = bovinoApiService;
        this.studentsData = [];
    }
    ngOnInit() {
        this.getAllBovinos();
    }
    getAllBovinos() {
        //Get saved list of students
        this.bovinoApiService.getList().subscribe(response => {
            console.log(response);
            this.studentsData = response;
        });
    }
    delete(item) {
        //Delete item in Student data
        this.bovinoApiService.deleteItem(item.id).subscribe(Response => {
            //Update list after delete is successful
            this.getAllBovinos();
        });
    }
};
BovinoListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bovino-list',
        templateUrl: './bovino-list.component.html',
        styleUrls: ['./bovino-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [BovinoApiService])
], BovinoListComponent);
export { BovinoListComponent };
//# sourceMappingURL=bovino-list.component.js.map