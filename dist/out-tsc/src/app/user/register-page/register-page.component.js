import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/shared/auth/auth.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
let RegisterPageComponent = class RegisterPageComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.loading = false;
    }
    registro(usuarioRegistro) {
        this.loading = true;
        const formRegistro = {
            displayName: usuarioRegistro.form.value.displayName,
            email: usuarioRegistro.form.value.email,
            password: usuarioRegistro.form.value.password
        };
        console.log(formRegistro);
        this.authService.crearUsuario(formRegistro.displayName, formRegistro.email, formRegistro.password).subscribe(dataFinal => {
            this.loading = true;
            if (dataFinal.token) {
                //const token = this.authService.revelarToken(sessionStorage.getItem('token'));
                // const tokenCifrado = this.authService.cifrarToken(dataFinal.token)
                // sessionStorage.setItem(tokenCifrado.nameToken, tokenCifrado.cifrado)
                this.router.navigate(['/user/login']);
                Swal.fire({
                    type: 'success',
                    confirmButtonText: 'Usuario Creado'
                });
                this.loading = false;
            }
        }, error => {
            Swal.fire({
                title: 'Algo ha fallado',
                text: '',
                type: 'warning',
                confirmButtonText: 'Quiero volverlo a intentar'
            });
        });
    }
    // On submit button click
    onSubmit() {
        this.registroForm.reset();
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
], RegisterPageComponent.prototype, "registroForm", void 0);
RegisterPageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register-page',
        templateUrl: './register-page.component.html',
        styleUrls: ['./register-page.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        Router,
        ActivatedRoute])
], RegisterPageComponent);
export { RegisterPageComponent };
//# sourceMappingURL=register-page.component.js.map