import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let GoogleMapComponent = class GoogleMapComponent {
    constructor() {
        // Google map lat-long
        this.lat = 5.067;
        this.lng = -75.517;
    }
    ngOnInit() {
    }
};
GoogleMapComponent = tslib_1.__decorate([
    Component({
        selector: 'app-google-map',
        templateUrl: './google-map.component.html',
        styleUrls: ['./google-map.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], GoogleMapComponent);
export { GoogleMapComponent };
//# sourceMappingURL=google-map.component.js.map