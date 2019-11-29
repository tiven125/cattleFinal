import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
let AuthGuard = class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate() {
        if (this.authService.estaLogueado()) {
            return true;
        }
        else {
            this.router.navigate(['user/login']);
            sessionStorage.clear();
            return false;
        }
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [AuthService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth-guard.service.js.map