import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdminService } from '../admin.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-restpassword',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './restpassword.component.html',
  styleUrl: './restpassword.component.css'
})
export class RestpasswordComponent implements OnInit {
resetpasswordform!:FormGroup
pass:any

constructor(private form :FormBuilder,
  private api:AdminService
 
){}
  ngOnInit(): void {
   this.resetpasswordform= this.form.group({
   password:[''],
   cpassword:['']
   })
  }
  passwordreset(){

this.api.resetpassword( this.pass,this.resetpasswordform.value).subscribe((res:any)=>{
  console.log(res);
  
  
})
  }
}

