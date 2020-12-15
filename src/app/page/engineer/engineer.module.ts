import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeengineerComponent } from './homeengineer/homeengineer.component';
import { Engineermenu001Component } from './engineermenu001/engineermenu001.component';
import { Engineermenu002Component } from './engineermenu002/engineermenu002.component';



@NgModule({
  declarations: [HomeengineerComponent, Engineermenu001Component, Engineermenu002Component],
  imports: [
    CommonModule
  ]
})
export class EngineerModule { }
