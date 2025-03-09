import { AdminpageComponent } from './adminpage/adminpage.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';

export const routes: Routes = [
  {path:'startpage', component: StartpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'adminpage', component: AdminpageComponent},
  {path:'', redirectTo:'/startpage', pathMatch: 'full'}
];
