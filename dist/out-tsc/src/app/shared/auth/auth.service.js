import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map, catchError } from "rxjs/operators";
import * as CryptoJS from 'crypto-js';
import { pipe } from 'rxjs';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Buffer } from 'buffer';
let AuthService = class AuthService {
    constructor(http, httpClient, router) {
        this.http = http;
        this.httpClient = httpClient;
        this.router = router;
        this.urlService = environment;
    }
    // Headers
    headersREST() {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        //myHeaders.append('Content-Type','application/x-www-form-urlencoded');
        //myHeaders.append('access_token',this.token.tokenValid);
        return myHeaders;
    }
    // Post Generar   Token
    validar(email, password) {
        const url_api = 'http://localhost:3000/signin';
        return this.http.post(url_api, { email, password }, { headers: this.headersREST() })
            .pipe(map(res => {
            return res.json();
        }), pipe(catchError(this.handleError)));
    }
    // Post Crear   Usuario
    crearUsuario(displayName, email, password) {
        const url_api = 'http://localhost:3000/usuario';
        return this.http.post(url_api, { displayName, email, password }, { headers: this.headersREST() })
            .pipe(map(res => {
            return res.json();
        }), pipe(catchError(this.handleError)));
    }
    // Erros
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
    estasLogueado() {
        return (sessionStorage.getItem('token')) ? true : false;
    }
    cifrarToken(token) {
        token = Buffer.from(token).toString('base64');
        this.token = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(token), CryptoJS.enc.Utf8.parse(this.urlService.keyChiperService), {
            keySize: 256,
            iv: CryptoJS.enc.Utf8.parse(this.urlService.ivChipresService),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        const reponse = {
            nameToken: 'token',
            cifrado: this.token
        };
        return reponse;
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
    estaLogueado() {
        const existToken = sessionStorage.getItem('token');
        if (existToken) {
            const tokenDec = this.revelarToken(this.token);
            if (!tokenDec) {
                Swal.fire({
                    title: 'Cuidado',
                    text: 'Tu token ha sido alterado o modificado, Comunicate con el administrador',
                    type: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }
            //return response;
            return true;
        }
        return false;
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    }),
    tslib_1.__metadata("design:paramtypes", [Http,
        HttpClient,
        Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map