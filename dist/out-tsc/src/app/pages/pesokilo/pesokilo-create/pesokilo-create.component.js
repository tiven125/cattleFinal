import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { PesokiloAPService } from '../pesokilo-ap.service';
import Swal from 'sweetalert2';
let PesokiloCreateComponent = class PesokiloCreateComponent {
    constructor(pesokiloAPService, router, route) {
        this.pesokiloAPService = pesokiloAPService;
        this.router = router;
        this.route = route;
        this.loading = false;
    }
    pesokilo(kilogramosPesokilo) {
        this.loading = true;
        const formPesokilo = {
            kilogramos: kilogramosPesokilo.form.value.kilogramos,
        };
        console.log(formPesokilo);
        this.pesokiloAPService.crearPesokilo(formPesokilo.kilogramos).subscribe(dataFinal => {
            this.loading = true;
            Swal.fire({
                type: 'success',
                confirmButtonText: 'peso Creado'
            });
            if (dataFinal.token) {
                //const token = this.pesokiloAPService.revelarToken(sessionStorage.getItem('token'));
                //const tokenCifrado = this.pesokiloAPService.cifrarToken(dataFinal.token)
                //sessionStorage.setItem(tokenCifrado.nameToken, tokenCifrado.cifrado)
                this.loading = false;
            }
        }, error => {
            Swal.fire({
                title: 'Algo ha fallado',
                text: 'campo  incorrecto',
                type: 'warning',
                confirmButtonText: 'Quiero volverlo a intentar'
            });
        });
    }
    // On submit button click
    onSubmit() {
        this.pesokiloForm.reset();
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChild('f', { static: false }),
    tslib_1.__metadata("design:type", NgForm)
], PesokiloCreateComponent.prototype, "pesokiloForm", void 0);
PesokiloCreateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pesokilo-create',
        templateUrl: './pesokilo-create.component.html',
        styleUrls: ['./pesokilo-create.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [PesokiloAPService, Router, ActivatedRoute])
], PesokiloCreateComponent);
export { PesokiloCreateComponent };
//# sourceMappingURL=pesokilo-create.component.js.map