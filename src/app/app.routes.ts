import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RestpasswordComponent } from './restpassword/restpassword.component';
import { ForgetComponent } from './forget/forget.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'view', component: ViewComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'passwordrest', component: RestpasswordComponent },
  {path:'forget',component:ForgetComponent}
];
