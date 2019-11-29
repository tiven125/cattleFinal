import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
import { Buffer } from 'buffer';
import { environment } from 'environments/environment';
let LoteAPiService = class LoteAPiService {
    constructor(http) {
        this.http = http;
        this.urlService = environment;
    }
    // Headers
    headersREST() {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        return myHeaders;
    }
    //  Get obtener Lote 
    obtenerLote() {
        const url = 'http://localhost:3000/lotes';
        return this.http.get(url, { headers: this.headersREST() }).pipe(map(response => {
            return response.json();
        }), pipe(catchError(this.handleError)));
    }
    //  Get obtener peso 
    obtenerganadero() {
        const url = 'http://localhost:3000/ganaderos';
        return this.http.get(url, { headers: this.headersREST() }).pipe(map(response => {
            return response.json();
        }), pipe(catchError(this.handleError)));
    }
    // Post Crear   Lote
    crearLote(nombre, ubicacion, dimension) {
        const url_api = 'http://localhost:3000/lote';
        return this.http.post(url_api, { nombre, ubicacion, dimension }, { headers: this.headersREST() })
            .pipe(map(res => {
            return res.json();
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
    revelarToken(tokenCifrado) {
        const decrypted = CryptoJS.AES.decrypt(tokenCifrado, CryptoJS.enc.Utf8.parse(this.urlService.keyChiperService), {
            keySize: 256,
            iv: CryptoJS.enc.Utf8.parse(this.urlService.ivChipresService),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        const dataDecrypt = Buffer.from(decrypted.toString(CryptoJS.enc.Utf8), 'base64').toString('ascii');
        const response = {
            nameToken: 'token',
            tokenValid: dataDecrypt
        };
        return response;
    }
};
LoteAPiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Http])
], LoteAPiService);
export { LoteAPiService };
//# sourceMappingURL=lote-api.service.js.map