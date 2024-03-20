import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  adminLogin(data:any){
    return this.http.post('http://localhost:4300/admin/login',data)

  }
  addregister(data:any){
    return this.http.post('http://localhost:4300/admin/addadmin',data)
  }
  getveg(){
    return this.http.get('http://localhost:4300/vegtable/vegitablelist')
  }
  add(data:any){
    return this.http.post('http://localhost:4300/vegtable/addvegitable',data)
  }
  
}
