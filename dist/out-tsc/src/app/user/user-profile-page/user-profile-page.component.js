import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';
let UserProfilePageComponent = class UserProfilePageComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        console.log(this.user);
    }
};
UserProfilePageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-profile-page',
        templateUrl: './user-profile-page.component.html',
        styleUrls: ['./user-profile-page.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService])
], UserProfilePageComponent);
export { UserProfilePageComponent };
//# sourceMappingURL=user-profile-page.component.js.map