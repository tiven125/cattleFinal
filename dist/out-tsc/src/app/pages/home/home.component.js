import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
let HomeComponent = class HomeComponent {
    constructor(config) {
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    ngOnInit() {
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [NgbCarouselConfig])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map