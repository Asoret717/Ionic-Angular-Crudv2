import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Employee } from '../models/employee';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  endpoint: string = "http://localhost:8080/employee";
  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.endpoint)
    .pipe(
      tap(gaming => console.log('Employee retrieved!')),
      catchError(this.handleError<Employee[]>('Get all Employee failed'))
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