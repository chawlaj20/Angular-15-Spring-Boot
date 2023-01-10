import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit{
  //form: any = {};
employee: Employee = new Employee();

constructor(private authService: AuthServiceService, private router: Router){}

form = new FormGroup(
{
  fname: new FormControl("",[Validators.required,Validators.minLength(3)]),
  lname: new FormControl("",[Validators.required,Validators.minLength(3)]),
  email: new FormControl("",[Validators.required,Validators.email])
}
);


get f()
{
  return this.form.controls;
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit()
  {
    this.authService.register(this.employee).subscribe(
      data=> {
        console.log('SUCCESSFUL', data);
        this.goToEmployeeList();
      }
    );
  }

  goToEmployeeList()
  {
    this.router.navigate(['/employeelist']);
  }

}
