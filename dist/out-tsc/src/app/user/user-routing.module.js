import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
const routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginPageComponent,
                data: {
                    title: 'login'
                }
            }, {
                path: 'register',
                component: RegisterPageComponent,
                data: {
                    title: 'register'
                }
            }, {
                path: 'profile',
                component: UserProfilePageComponent,
                data: {
                    title: 'profile'
                }
            }
        ]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], UserRoutingModule);
export { UserRoutingModule };
//# sourceMappingURL=user-routing.module.js.map