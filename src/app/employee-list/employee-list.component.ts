import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../employee';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] | undefined;

  constructor (private authService: AuthServiceService, private router: Router){}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees()
  {
    this.authService.getAllEmployees().subscribe(
      data=>{
        this.employees=data;
      }
    );
  }

  deleteEmployee(id: number)
  {
    this.authService.deleteEmployeeById(id).subscribe(
      data=>
      {
        console.log(data);
        window.location.reload();
      }
    );
  }

  
    
}
