import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { GanaderoAPiService } from '../ganadero-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
let GanaderoCreateComponent = class GanaderoCreateComponent {
    constructor(ganaderoAPiService, router, route) {
        this.ganaderoAPiService = ganaderoAPiService;
        this.router = router;
        this.route = route;
        this.loading = false;
    }
    ganadero(ganaderoRegistro) {
        this.loading = true;
        const formGanadero = {
            nombre: ganaderoRegistro.form.value.nombre,
            correo: ganaderoRegistro.form.value.correo,
            telefono: ganaderoRegistro.form.value.telefono
        };
        console.log(formGanadero);
        this.ganaderoAPiService.crearGanadero(formGanadero.nombre, formGanadero.correo, formGanadero.telefono).subscribe(dataFinal => {
            this.loading = true;
            Swal.fire({
                type: 'success',
                confirmButtonText: 'Ganadero Creado'
            });
            if (dataFinal.token) {
                //const token = this.authService.revelarToken(sessionStorage.getItem('token'));
                this.loading = false;
            }
        }, error => {
            Swal.fire({
                title: 'Algo ha fallado',
                text: 'Verifique los campos  o  Ganadero ya Existe',
                type: 'warning',
                confirmButtonText: 'Quiero volverlo a intentar'
            });
        });
    }
    onSubmit() {
        this.ganaderoForm.reset();
    }
    ngOnInit() { }
};
tslib_1.__decorate([
    ViewChild('f', { static: false }),
    tslib_1.__metadata("design:type", NgForm)
], GanaderoCreateComponent.prototype, "ganaderoForm", void 0);
GanaderoCreateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ganadero-create',
        templateUrl: './ganadero-create.component.html',
        styleUrls: ['./ganadero-create.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [GanaderoAPiService,
        Router,
        ActivatedRoute])
], GanaderoCreateComponent);
export { GanaderoCreateComponent };
//# sourceMappingURL=ganadero-create.component.js.map