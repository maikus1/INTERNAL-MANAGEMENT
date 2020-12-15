import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarUserComponent } from './share/menubar-user/menubar-user.component';
import { MenubarManagementComponent } from './share/menubar-management/menubar-management.component';
import { MenubarEngineerComponent } from './share/menubar-engineer/menubar-engineer.component';
import { ManagementModule } from './page/management/management.module';

@NgModule({
  declarations: [
    AppComponent,
    MenubarUserComponent,
    MenubarManagementComponent,
    MenubarEngineerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
