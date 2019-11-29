import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
let CarouselComponent = class CarouselComponent {
    constructor(config) {
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    ngOnInit() {
    }
};
CarouselComponent = tslib_1.__decorate([
    Component({
        selector: 'app-carousel',
        templateUrl: './carousel.component.html',
        styleUrls: ['./carousel.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [NgbCarouselConfig])
], CarouselComponent);
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map