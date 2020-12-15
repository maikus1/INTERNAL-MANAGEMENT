import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    // path: '', component: LoginComponent,
    // children: [
    //   { path: 'homeuser', component:  UserModule},
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
