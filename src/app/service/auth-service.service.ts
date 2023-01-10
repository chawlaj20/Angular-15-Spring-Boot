import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

const REGISTER = 'http://localhost:8080/api/';
//const deleteEmployee = 'http://localhost:8080/api/deleteEmployeeById/';

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

register(employee: Employee): Observable<Employee>
{
  return this.http.post<Employee>(REGISTER+ 'createEmployee',employee,httpOptions);
}

deleteEmployeeById(id: number): Observable<Object>
{
  return this.http.delete(`${REGISTER+'deleteEmployeeById'}/${id}`);
}

}
