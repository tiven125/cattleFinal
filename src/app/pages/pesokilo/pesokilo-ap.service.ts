import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Http, Headers } from '@angular/http';
import {map, catchError} from 'rxjs/operators'
import { environment } from 'environments/environment';
import { AuthService } from 'app/shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PesokiloAPService {
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

//  post Crear peso 
public crearPesokilo(kilogramos: number):Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/pesokilo'
return this.http.post(url_api,
 { kilogramos },{headers : this.headersREST()})
  .pipe(map(res => {
    return res.json();
  }), pipe(catchError(this.handleError)))
}

//  Get obtener peso 
  public obtenerpesokilo(): Observable<any> {
   const url='https://cattlecebu.herokuapp.com/pesokilos'
    return this.http.get(url,
     { headers: this.headersREST() }).pipe(
      map(response => {        
        return response.json();
      }), pipe(catchError(this.handleError)))
  }

// Get Id
getPesoId(id): Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/pesokilo/' + id
  return this.http.get(url_api, {headers: this.headersREST()}).pipe(
    catchError(this.handleError)
  )
}

//  Update  peso 
public editarPeso(id,pesokilo):Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/pesokilo/' + id
return this.http.put(url_api,
 { kilogramos:pesokilo.kilogramos },{headers : this.headersREST()})
  .pipe(map(res => {
    return res.json();
  }), pipe(catchError(this.handleError)))
}

// Delete Peso
deletPesokilo(id): Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/pesokilo/' + id
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
