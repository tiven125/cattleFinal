import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Http, Headers } from '@angular/http';
import {map, catchError} from 'rxjs/operators'
import { environment } from 'environments/environment';
import {AuthService} from '../../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GanaderoAPiService {
  urlService: any = environment; 

  constructor(private http:Http,private authService: AuthService) { }
  // Headers
  private headersREST(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const token = this.authService.revelarToken(sessionStorage.getItem('token'));
    myHeaders.append('Authorization','Bearer '+token.tokenValid);
    return myHeaders;
  }


//  Get obtener Ganadero 
  public obtenerganadero(): Observable<any> {
   const url='https://cattlecebu.herokuapp.com/ganaderos'
    return this.http.get(url,
     { headers: this.headersREST() }).pipe(
      map(response => {        
        return response.json();
      }), pipe(catchError(this.handleError)))
  }

  // Post Crear   ganadero
  public crearGanadero(ganadero):Observable<any> {
    const url_api='https://cattlecebu.herokuapp.com/ganadero'
  return this.http.post(url_api,
   { nombre:ganadero.nombre, correo:ganadero.correo,telefono:ganadero.telefono },{headers : this.headersREST()})
    .pipe(map(res => {
      return res.json();
    }), pipe(catchError(this.handleError)))
}


// Get Id Ganadero
getGanaderoId(id): Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/ganadero/' + id
  return this.http.get(url_api, {headers: this.headersREST()}).pipe(
    catchError(this.handleError)
  )
}

// Delete Ganadero
deletGanaderoID(id): Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/ganadero/' + id
  return this.http.delete(url_api, { headers: this.headersREST() }).pipe(
    catchError(this.handleError)
  )
}

//  Update  Ganadero 
public editarGanadero(id,ganadero):Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/ganadero/' + id
return this.http.put(url_api,
 { nombre:ganadero.nombre, correo:ganadero.correo,telefono:ganadero.telefono  },{headers : this.headersREST()})
  .pipe(map(res => {
    return res.json();
  }), pipe(catchError(this.handleError)))
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