import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { Usermenu001Component } from './usermenu001/usermenu001.component';
import { Usermenu002Component } from './usermenu002/usermenu002.component';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../share/share.module';
import { Usermenu002DetailComponent } from './usermenu002-detail/usermenu002-detail.component'

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
    ShareModule
 
  ],
  exports: [
    RouterModule,
   
  ],
  
})
export class UserModule { }
