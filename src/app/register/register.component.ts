import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  regform!: FormGroup;
  constructor(private form :FormBuilder,
    private api:AdminService){

  }
  ngOnInit(): void {
    this.regform=this.form.group({
      firstname:[''],
      lastname:[''],
      mobilenumber:[''],
      dob:[''],
      email:[''],
      Address:['']


    })
    
  }
  Register(){
   this.api.addregister(this.regform.value).subscribe((res:any)=>{
    console.log(res)
   })
  }
}
