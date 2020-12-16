import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Engineermenu001Component } from './page/engineer/engineermenu001/engineermenu001.component';
import { Engineermenu002Component } from './page/engineer/engineermenu002/engineermenu002.component';
import { HomeengineerComponent } from './page/engineer/homeengineer/homeengineer.component';
import { LoginComponent } from './page/login/login.component'
import { HomemanagementComponent } from './page/management/homemanagement/homemanagement.component';
import { Managementmenu001Component } from './page/management/managementmenu001/managementmenu001.component';
import { Managementmenu002Component } from './page/management/managementmenu002/managementmenu002.component';
import { Managementmenu003Component } from './page/management/managementmenu003/managementmenu003.component';
import { Managementmenu004Component } from './page/management/managementmenu004/managementmenu004.component';
import { HomeuserComponent } from './page/user/homeuser/homeuser.component';
import { Usermenu001Component } from './page/user/usermenu001/usermenu001.component';
import { Usermenu002Component } from './page/user/usermenu002/usermenu002.component';
import { MenubarManagementComponent } from './share/menubar-management/menubar-management.component';


const routes: Routes = [
  // {
  //   path: '', redirectTo: '/login', pathMatch: 'full'
  // },
  {
    path: 'login', component: LoginComponent
  },
  { path: 'homeuser', component: HomeuserComponent },
  { path: 'usermenu001', component: Usermenu001Component },
  { path: 'usermenu002', component: Usermenu002Component },
  { path: 'homemanagement', component: HomemanagementComponent },
  { path: 'managementmenu001', component: Managementmenu001Component },
  { path: 'managementmenu002', component: Managementmenu002Component },
  { path: 'managementmenu003', component: Managementmenu003Component },
  { path: 'managementmenu004', component: Managementmenu004Component },
  { path: 'homeengineer', component: HomeengineerComponent },
  { path: 'engineermenu001', component: Engineermenu001Component },
  { path: 'engineermenu002', component: Engineermenu002Component},
  { path: 'menubarmanagement', component: MenubarManagementComponent },
  // { path: '', loadChildren: './page/login/login-routing.module#LoginModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
