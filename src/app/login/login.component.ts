import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  adminLogin!: FormGroup;
 

  constructor(
    private form: FormBuilder,
    private api: AdminService,
    private router:Router) {

  }
  ngOnInit(): void {
    this.adminLogin = this.form.group({
      username: [''],
      password: ['']
    })
   
  }
  login() {
    this.api.adminLogin(this.adminLogin.value).subscribe((res: any) => {
      console.log('res', res)
      this.router.navigate(['/home'])


    })
  }
}
