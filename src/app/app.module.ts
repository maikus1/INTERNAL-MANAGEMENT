import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { MenubarUserComponent } from './share/menubar-user/menubar-user.component';
import { MenubarManagementComponent } from './share/menubar-management/menubar-management.component';
import { MenubarEngineerComponent } from './share/menubar-engineer/menubar-engineer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MaterialModule, MatNativeDateModule } from '@angular/material';

// import { FormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DatepickerModule } from 'angular-mat-datepicker'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { PaginationModule } from 'ngx-bootstrap/pagination';

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
    BrowserAnimationsModule,
    // NgbModule,
    // FormsModule,
    BsDatepickerModule.forRoot(),
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
