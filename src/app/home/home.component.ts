import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  vegitables!: FormGroup;
  veg: any
  constructor(private form: FormBuilder,
    private api: AdminService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.vegitables = this.form.group({
      productname: [''],
      quantity: [''],
      price: [''],
      description: ['']

    })
    this.api.getveg().subscribe((res: any) => {
      this.veg = res;
      console.log(this.veg,'veg')
    })
  }
  Add() {
    this.api.add(this.vegitables.value).subscribe((res: any) => {
      console.log('res', res)
      this.router.navigate(['/view'])
    })
  }
}
