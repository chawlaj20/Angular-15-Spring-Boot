import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

const REGISTER = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {

  constructor(private http: HttpClient) { }

getAllEmployees(): Observable<Employee[]>
{
  return this.http.get<Employee[]>(REGISTER+ 'getAllEmployees', httpOptions);
}

register(employee: Employee): Observable<Object>
{
  return this.http.post<any>(REGISTER+ 'createEmployee',httpOptions);
}

}
