import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { Usermenu001Component } from './usermenu001/usermenu001.component';
import { Usermenu002Component } from './usermenu002/usermenu002.component';
import { Routes, RouterModule } from '@angular/router';
import { DatepickerModule } from 'angular-mat-datepicker';
import { Usermenu003Component } from './usermenu003/usermenu003.component'



const routes: Routes = [
  { path: 'homeuser', component: HomeuserComponent },
  { path: 'usermenu001', component: Usermenu001Component },
  { path: 'usermenu002', component: Usermenu002Component },
  { path: 'usermenu003', component: Usermenu003Component },
]

@NgModule({
  declarations: [HomeuserComponent, Usermenu001Component, Usermenu002Component, Usermenu003Component],
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
