import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarEngineerComponent } from './menubar-engineer/menubar-engineer.component'
import { MenubarManagementComponent } from './menubar-management/menubar-management.component'
import { MenubarUserComponent } from './menubar-user/menubar-user.component'


@NgModule({
  declarations: [
    MenubarEngineerComponent,
    MenubarManagementComponent,
    MenubarUserComponent,
  ],
  imports: [
    CommonModule,
  ],exports: [
    MenubarEngineerComponent,
    MenubarManagementComponent,
    MenubarUserComponent,
  ]
})
export class ShareModule { }
