import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { Usermenu001Component } from './usermenu001/usermenu001.component';
import { Usermenu002Component } from './usermenu002/usermenu002.component';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { Usermenu004Component } from './usermenu004/usermenu004.component';
=======
import { DatepickerModule } from 'angular-mat-datepicker';
import { Usermenu003Component } from './usermenu003/usermenu003.component'


>>>>>>> 981fd6a13d530e0330c91e93eb9c999b91440246

const routes: Routes = [
  { path: 'homeuser', component: HomeuserComponent },
  { path: 'usermenu001', component: Usermenu001Component },
  { path: 'usermenu002', component: Usermenu002Component },
<<<<<<< HEAD
  { path: 'usermenu004', component: Usermenu004Component },
]

@NgModule({
  declarations: [HomeuserComponent, Usermenu001Component, Usermenu002Component, Usermenu004Component],
=======
  { path: 'usermenu003', component: Usermenu003Component },
]

@NgModule({
  declarations: [HomeuserComponent, Usermenu001Component, Usermenu002Component, Usermenu003Component],
>>>>>>> 981fd6a13d530e0330c91e93eb9c999b91440246
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
 
  ],
  exports: [
    RouterModule,
    DatepickerModule,
   
  ],
  
})
export class UserModule { }
