import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
    {path:'', component:RegisterComponent},
    {path: 'register', component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'view',component:ViewComponent}
    
];
