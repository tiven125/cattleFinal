import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
let LoginPageComponent = class LoginPageComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.loading = false;
    }
    login(userLogin) {
        this.loading = true;
        const formLogin = {
            userName: userLogin.form.value.Username,
            password: userLogin.form.value.password
        };
        this.authService.validar(formLogin.userName, formLogin.password).subscribe(dataFinal => {
            this.loading = true;
            if (dataFinal.token) {
                const tokenCifrado = this.authService.cifrarToken(dataFinal.token);
                sessionStorage.setItem(tokenCifrado.nameToken, tokenCifrado.cifrado);
                this.router.navigate(['/components/carousel']);
                this.loading = false;
            }
        }, error => {
            if (error.Errors.message.includes('username') || error.Errors.message.includes('invalid_database')) {
                this.loading = true;
                Swal.fire({
                    title: 'Algo ha fallado',
                    text: 'Tu usuario/contraseña es incorrecto',
                    type: 'warning',
                    confirmButtonText: 'Quiero volverlo a intentar'
                });
            }
            else {
                Swal.fire({
                    title: 'Hemos tenido un error!',
                    text: error.Errors.message,
                    type: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }
            this.loading = false;
        });
        this.loading = false;
    }
    // On submit button click
    onSubmit() {
        this.loginForm.reset();
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
    ngOnInit() { }
};
tslib_1.__decorate([
    ViewChild('f', { static: false }),
    tslib_1.__metadata("design:type", NgForm)
], LoginPageComponent.prototype, "loginForm", void 0);
LoginPageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login-page',
        templateUrl: './login-page.component.html',
        styleUrls: ['./login-page.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        Router,
        ActivatedRoute])
], LoginPageComponent);
export { LoginPageComponent };
//# sourceMappingURL=login-page.component.js.map