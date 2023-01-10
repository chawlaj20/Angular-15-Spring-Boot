import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';

const routes: Routes = [
  {path:"employeelist", component: EmployeeListComponent},
  {path:"home", component: HomeComponent},
  {path:"createemployee", component:RegisterEmployeeComponent},
  {path:" ", redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
