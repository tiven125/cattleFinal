import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
let BovinoApiService = class BovinoApiService {
    constructor(http) {
        this.http = http;
        // API path
        this.base_path = 'http://localhost:3000/bovinos';
        // Http Options
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
    ;
    // Create a new item
    createItem(item) {
        return this.http
            .post(this.base_path, JSON.stringify(item), this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }
    // Get single student data by ID
    getItem(id) {
        return this.http
            .get(this.base_path + '/' + id)
            .pipe(retry(2), catchError(this.handleError));
    }
    // Get bovinos data
    getList() {
        return this.http
            .get(this.base_path)
            .pipe(retry(2), catchError(this.handleError));
    }
    // Update item by id
    updateItem(id, item) {
        return this.http
            .put(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }
    // Delete item by id
    deleteItem(id) {
        return this.http
            .delete(this.base_path + '/' + id, this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }
};
BovinoApiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], BovinoApiService);
export { BovinoApiService };
//# sourceMappingURL=bovino-api.service.js.map