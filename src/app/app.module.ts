import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { MenubarUserComponent } from './share/menubar-user/menubar-user.component';
import { MenubarManagementComponent } from './share/menubar-management/menubar-management.component';
import { MenubarEngineerComponent } from './share/menubar-engineer/menubar-engineer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    // MenubarUserComponent,
    // MenubarManagementComponent,
    // MenubarEngineerComponent,
    // ShareModule
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
