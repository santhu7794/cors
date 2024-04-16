import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AdminService } from '../admin.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  vegitables!: FormGroup;
  editVegForm!: FormGroup;
  veg: any;
  vid: any;
  vimage!:File;
  constructor(
    private form: FormBuilder,
    private api: AdminService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.vegitables = this.form.group({
      productname: [''],
      quantity: [''],
      price: [''],
      description: [''],
      photo:[''],
    });

    this.editVegForm = this.form.group({
      productname: [''],
      quantity: [''],
      price: [''],
      description: [''],
      photo:[''],
    });

    this.api.getveg().subscribe((res: any) => {
      this.veg = res;
      console.log(this.veg, 'veg');
    });
  
  }
  selectFile(r:any){
      this.vimage=r.target.files[0]as File;
      console.log(this.vimage,'photo')
  }
  Add() {
    let RegData = new FormData();
    RegData.append('photo',this.vimage)
    RegData.append('productname',this.vegitables.value.productname)
    RegData.append('quantity',this.vegitables.value.quantity)
    RegData.append('price',this.vegitables.value.price)
    RegData.append('description',this.vegitables.value.description)


    this.api.add(RegData).subscribe((res: any) => {
      console.log('res', res);
      // this.router.navigate(['/view']);
    });
  }

  editVeg(v: any) {
    console.log(v, 'vvvvvvvvvvvvvv');
    this.vid = v._id;
    console.log(this.vid);

    this.editVegForm.patchValue({
      productname: v.productname,
      quantity: v.quantity,
      price: v.price,
      description: v.description,
      photo:v.photo
    });
  }

  updateVeg() {
    this.api
      .editVegtables(this.vid, this.editVegForm.value)
      .subscribe((res: any) => {
        console.log(res, 'edit veg');
      });
    window.location.reload();
  }
  deleteVeg(d: any) {
    let did = d._id;
    console.log(did);
    this.api.deleteVegtables(did).subscribe((res: any) => {
      console.log(res);
    });
    window.location.reload();
  }
  
}
