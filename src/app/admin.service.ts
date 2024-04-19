import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  jwttoken(): any {
    const header = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };
    return header;
  }

  constructor(private http: HttpClient) {}
  adminLogin(data: any) {
    return this.http.post('http://localhost:4300/admin/adminlogin', data);
  }
  addregister(data: any) {
    return this.http.post('http://localhost:4300/admin/addadmin', data);
  }
  getveg() {
    return this.http.get('http://localhost:4300/vegtable/vegitablelist',this.jwttoken() );
  }
  add(data: any) {
    return this.http.post('http://localhost:4300/vegtable/addvegitable', data,this.jwttoken());
  }

  editVegtables(id: any, data: any) {
    return this.http.put(
      'http://localhost:4300/vegtable/updatevegtables/' + id,
      data,this.jwttoken()
    );
  }
  deleteVegtables(id: any) {
    return this.http.delete(
      'http://localhost:4300/vegtable/deletevegtable/' + id,this.jwttoken()
    );
  }
  forget(data:any){
    return this.http.post('http://localhost:4300/vegtable/forgetpassword',data)
  };
  resetpassword(id:any,data:any){
    return this.http.put('http://localhost:4300/vegtable/resetpassword'+id,data)
  }
}
