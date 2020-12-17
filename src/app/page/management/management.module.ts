import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomemanagementComponent } from './homemanagement/homemanagement.component';
import { Managementmenu001Component } from './managementmenu001/managementmenu001.component';
import { Managementmenu002Component } from './managementmenu002/managementmenu002.component';
import { Managementmenu003Component } from './managementmenu003/managementmenu003.component';
import { Managementmenu004Component } from './managementmenu004/managementmenu004.component';
import { ShareModule } from '../../share/share.module'



@NgModule({
  declarations: [
    HomemanagementComponent, 
    Managementmenu001Component, 
    Managementmenu002Component, 
    Managementmenu003Component, 
    Managementmenu004Component, 
  ],
  imports: [
    CommonModule,
    ShareModule,
    
  ],exports: [
    HomemanagementComponent, 
    Managementmenu001Component, 
    Managementmenu002Component, 
    Managementmenu003Component, 
    Managementmenu004Component, 
  ]
})

export class ManagementModule { }
