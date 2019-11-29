import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
let SmartDataTableService = class SmartDataTableService {
    constructor(http) {
        this.http = http;
    }
    // Headers
    headersREST() {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        return myHeaders;
    }
    obtenerpesokilo() {
        const url = 'http://localhost:3000/pesokilos';
        return this.http.get(url, { headers: this.headersREST() }).pipe(map(response => {
            return response.json();
        }), pipe(catchError(this.handleError)));
    }
    handleError(error) {
        const setError = (error['_body']) ? JSON.parse(error['_body']) : error.statusText;
        const json = {
            Errors: setError,
            Resultado: [],
            EsExitoso: false,
            Status: error.status
        };
        return Observable.throw(json);
    }
};
SmartDataTableService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Http])
], SmartDataTableService);
export { SmartDataTableService };
//# sourceMappingURL=smart-data-table.service.js.map