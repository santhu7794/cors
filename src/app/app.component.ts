import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RestpasswordComponent } from './restpassword/restpassword.component';
import { ForgetComponent } from './forget/forget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RegisterComponent,ReactiveFormsModule,LoginComponent,FormsModule,CommonModule,ForgetpasswordComponent,RestpasswordComponent,ForgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'backend';
}
