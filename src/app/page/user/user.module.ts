import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { Usermenu001Component } from './usermenu001/usermenu001.component';
import { Usermenu002Component } from './usermenu002/usermenu002.component';
import { Routes, RouterModule } from '@angular/router';
import { Usermenu004Component } from './usermenu004/usermenu004.component';

const routes: Routes = [
  { path: 'homeuser', component: HomeuserComponent },
  { path: 'usermenu001', component: Usermenu001Component },
  { path: 'usermenu002', component: Usermenu002Component },
  { path: 'usermenu004', component: Usermenu004Component },
]

@NgModule({
  declarations: [HomeuserComponent, Usermenu001Component, Usermenu002Component, Usermenu004Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class UserModule { }
