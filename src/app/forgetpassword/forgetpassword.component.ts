import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent implements OnInit {
  forgetform!:FormGroup
  password:any
  constructor(private form :FormBuilder,
    private api:AdminService
  ){

  }
  ngOnInit(): void {
   this.forgetform =this.form.group({
    email:['',Validators.required]
   })
  }
  forget(){
    this.api.forget(this.forgetform.value).subscribe((res:any)=>{
      console.log(res);
      console.log(this.password ,"password");
      
      
      
    })
  }
}
