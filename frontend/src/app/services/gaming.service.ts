import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technology } from '../models/technology';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class GamingService {
  idForm:number;
  endpoint: string = "http://localhost:8080/gaming";
  constructor(private httpClient: HttpClient) { }

  setIdForm(id:number){this.idForm=id;}
  getIdForm(){return this.idForm;}

  getGaming(): Observable<Technology[]>{
    return this.httpClient.get<Technology[]>(this.endpoint)
    .pipe(
      tap(gaming => console.log('Gaming retrieved!')),
      catchError(this.handleError<Technology[]>('Get all Technology failed'))
    );
  }
  
  getTechnologyById(id: number): Observable<Technology>{
    return this.httpClient.get<Technology>(this.endpoint + "/" + id)
    .pipe(
      tap(_ => console.log('Technology fetched')),
      catchError(this.handleError<Technology>('Get technology id failed'))
    );
  }

  createTechnology(technology: Technology): Observable<Technology>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", technology.name);
    bodyEncoded.append("price", technology.price);
    const body = bodyEncoded.toString();
    console.log("createTechnology")
    console.log(JSON.stringify(technology))
    return this.httpClient.post<Technology>(this.endpoint, body, httpOptionsUsingUrlEncoded)
    .pipe(
      tap(gaming => console.log('Technology created!')),
      catchError(this.handleError<Technology>('Error occured creating Technology'))
    );
  }

  modifyTechnology(technology: Technology,idTechnology: number): Observable<Technology>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", technology.name);
    bodyEncoded.append("price", technology.price);
    const body = bodyEncoded.toString();
    console.log("modifyTechnology")
    console.log(JSON.stringify(technology))
    return this.httpClient.put<Technology>(this.endpoint + "/" + idTechnology,body, httpOptionsUsingUrlEncoded)
    .pipe(
      tap(_ => console.log('Technology was modified!')),
      catchError(this.handleError<Technology>('Modify Technology failed'))
    );
  }

  deleteTechnology(idTechnology: number): Observable<Technology>{
    return this.httpClient.delete<Technology>(this.endpoint + "/" + idTechnology)
    .pipe(
      tap(gaming => console.log('Technology deleted!')),
      catchError(this.handleError<Technology>('Delete Technology failed'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}