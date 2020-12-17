import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { Usermenu001Component } from './usermenu001/usermenu001.component';
import { Usermenu002Component } from './usermenu002/usermenu002.component';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share/share.module';
import { Usermenu002DetailComponent } from './usermenu002-detail/usermenu002-detail.component'

import {MatIconModule} from '@angular/material/icon'; 
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 

const routes: Routes = [
  { path: 'homeuser', component: HomeuserComponent },
  { path: 'usermenu001', component: Usermenu001Component },
  { path: 'usermenu002', component: Usermenu002Component },
  { path: 'Usermenu002DetailComponent', component: Usermenu002DetailComponent },
]

@NgModule({
  declarations: [HomeuserComponent, Usermenu001Component, Usermenu002Component, Usermenu002DetailComponent],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,

    MatStepperModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
 
  ],
  exports: [
    RouterModule,
   
  ],
  
})
export class UserModule { }
