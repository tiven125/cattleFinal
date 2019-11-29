import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoteAPiService } from '../lote-api.service';
let LoteCreateComponent = class LoteCreateComponent {
    constructor(loteAPiService, router, route) {
        this.loteAPiService = loteAPiService;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.ganaderos = [];
    }
    ganadero(loteRegistro) {
        this.loading = true;
        const formLote = {
            nombre: loteRegistro.form.value.nombre,
            ubicacion: loteRegistro.form.value.ubicacion,
            dimension: loteRegistro.form.value.dimension,
            ganaderoSelect: loteRegistro.form.value.ganaderoSelect
        };
        console.log(formLote);
        this.loteAPiService.crearLote(formLote.nombre, formLote.ubicacion, formLote.dimension).subscribe(dataFinal => {
            this.loading = true;
            Swal.fire({
                type: 'success',
                confirmButtonText: 'Lote Creado'
            });
            if (dataFinal.token) {
                //const token = this.authService.revelarToken(sessionStorage.getItem('token'));
                this.loading = false;
            }
        }, error => {
            Swal.fire({
                title: 'Algo ha fallado',
                text: 'Verifique los campos  o  Lote ya Existe',
                type: 'warning',
                confirmButtonText: 'Quiero volverlo a intentar'
            });
        });
    }
    ngOnInit() {
        this.getAllGanaderos();
    }
    getAllGanaderos() {
        this.loteAPiService.obtenerganadero().subscribe(dataFinal => {
            this.ganaderos = dataFinal.ganadero;
            console.log(dataFinal.ganadero);
        }, error => {
            console.log(error);
        });
    }
    onSubmit() {
        this.loteForm.reset();
    }
};
tslib_1.__decorate([
    ViewChild('f', { static: false }),
    tslib_1.__metadata("design:type", NgForm)
], LoteCreateComponent.prototype, "loteForm", void 0);
LoteCreateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-lote-create',
        templateUrl: './lote-create.component.html',
        styleUrls: ['./lote-create.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [LoteAPiService,
        Router,
        ActivatedRoute])
], LoteCreateComponent);
export { LoteCreateComponent };
//# sourceMappingURL=lote-create.component.js.map