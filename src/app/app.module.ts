import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module'
import { ManagementModule } from './page/management/management.module'

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    ManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
