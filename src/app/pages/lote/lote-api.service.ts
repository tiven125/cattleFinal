import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Http, Headers } from '@angular/http';
import {map, catchError} from 'rxjs/operators'
import { environment } from 'environments/environment';
import {AuthService} from '../../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoteAPiService {
  urlService: any = environment; 

  constructor(private http:Http, private authService: AuthService) {
    
   }
  // Headers
  private headersREST(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const token = this.authService.revelarToken(sessionStorage.getItem('token'));
    myHeaders.append('Authorization','Bearer '+token.tokenValid);
    return myHeaders;
  }


//  Get obtener Lote 
  public obtenerLote(): Observable<any> {
   const url='https://cattlecebu.herokuapp.com/lotes'
    return this.http.get(url,
     { headers: this.headersREST() }).pipe(
      map(response => {        
        return response.json();
      }), pipe(catchError(this.handleError)))
  }

  // Post Crear   Lote
  public crearLote(lote):Observable<any> {
    const url_api='https://cattlecebu.herokuapp.com/lote'
  return this.http.post(url_api,
   { nombre: lote.nombre, dimension: lote.dimension, ubicacion: lote.ubicacion, ganadero: lote.ganadero },{headers : this.headersREST()})
    .pipe(map(res => {
      return res.json();
    }), pipe(catchError(this.handleError)))
}

// Get Id Lote
getLoteId(id): Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/lote/' + id
  return this.http.get(url_api, {headers: this.headersREST()}).pipe(
    catchError(this.handleError)
  )
}

//  Update  Lote 
public editarPeso(id,lote):Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/lote/' + id
return this.http.put(url_api,
 { nombre: lote.nombre, dimension: lote.dimension, ubicacion: lote.ubicacion, ganadero: lote.ganadero  },{headers : this.headersREST()})
  .pipe(map(res => {
    return res.json();
  }), pipe(catchError(this.handleError)))
}

// Delete Lote
deleLote(id): Observable<any> {
  const url_api='https://cattlecebu.herokuapp.com/lote/' + id
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
