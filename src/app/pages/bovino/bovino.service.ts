import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Http, Headers } from '@angular/http';
import {map, catchError} from 'rxjs/operators'
import { AuthService } from 'app/shared/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class BovinoService {

  constructor(private http:Http,private authService: AuthService) { }
  // Headers
  private headersREST(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const token = this.authService.revelarToken(sessionStorage.getItem('token'));
    myHeaders.append('Authorization','Bearer '+token.tokenValid);
    return myHeaders;
  }


// Post Crear   Bovino
public crearBovino(bovino):Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/bovino'
return this.http.post(url_api,
 { fechaNacimiento: bovino.fechaNacimiento, descripcion: bovino.descripcion,sexo: bovino.sexo, raza: bovino.raza , lote: bovino.lote,pesokilo: bovino.pesokilo },{headers : this.headersREST()})
  .pipe(map(res => {
    return res.json();
  }), pipe(catchError(this.handleError)))
}

//  Get obtener Bovino 
public obtenerBovino(): Observable<any> {
  const url='https://cattlecebu.herokuapp.com/bovinos'
   return this.http.get(url,
    { headers: this.headersREST() }).pipe(
     map(response => {        
       return response.json();
     }), pipe(catchError(this.handleError)))
 }


// Get Id Bovino
getBovinoId(id): Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/bovino/' + id
  return this.http.get(url_api, {headers: this.headersREST()}).pipe(
    catchError(this.handleError)
  )
}

//  Update  Bovino 
public editarBovino(id,bovino):Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/bovino/' + id
return this.http.put(url_api,
 { fechaNacimiento: bovino.fechaNacimiento, descripcion: bovino.descripcion,sexo: bovino.sexo, raza: bovino.raza , lote: bovino.lote,pesokilo: bovino.pesokilo  },{headers : this.headersREST()})
  .pipe(map(res => {
    return res.json();
  }), pipe(catchError(this.handleError)))
}

// Delete Bovino
deletBovino(id): Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/bovino/' + id
  return this.http.delete(url_api, { headers: this.headersREST() }).pipe(
    catchError(this.handleError)
  )
}

  private handleError(error: Response) {
    const setError = (error['_body']) ? JSON.parse(error['_body']) : error.statusText;
    const json = {
      Errors: setError,
      Resultado: [],
      EsExitoso: false,
      Status: error.status
    };
    return Observable.throw(json);
  }


}
