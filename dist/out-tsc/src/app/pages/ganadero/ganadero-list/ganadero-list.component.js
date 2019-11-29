import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GanaderoAPiService } from '../ganadero-api.service';
let GanaderoListComponent = class GanaderoListComponent {
    constructor(ganaderoAPiService) {
        this.ganaderoAPiService = ganaderoAPiService;
        this.loadingIndicator = true;
        // Exporto los datos del archivo JSON a la  vista 
        this.rows = [];
        // Table Column Titles
        this.columns = [
            { prop: 'nombre' },
            { name: 'correo' },
            { name: 'telefono' },
        ];
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
    }
    ngOnInit() {
        this.getAllGanaderos();
    }
    getAllGanaderos() {
        this.ganaderoAPiService.obtenerganadero().subscribe(dataFinal => {
            this.rows = dataFinal.ganadero;
            console.log(dataFinal.ganadero);
        }, error => {
            console.log(error);
        });
    }
};
GanaderoListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ganadero-list',
        templateUrl: './ganadero-list.component.html',
        styleUrls: ['./ganadero-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [GanaderoAPiService])
], GanaderoListComponent);
export { GanaderoListComponent };
//# sourceMappingURL=ganadero-list.component.js.map