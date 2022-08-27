import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Users } from '../users';


@Injectable({

  providedIn: 'root'
})
export class UserService {
  delete(arg0: string) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:8080/api"

  

  getUsers():Observable<Users[]>{
    
    return this.http.get<Users[]>(`${this.baseUrl}/${"user"}`);

  }

  addUsers(user: any):Observable<any>{

    //const headers={'content-type':'application/x-java-object'}
    const body=JSON.stringify(user);
    console.log(body);

    return this.http.post<any>(`${this.baseUrl}/${"add"}`,user);
    
  }
  deleteUser(user: any):Observable<any>{

    
    let header= new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Request-Headers': 'DELETE',
     
    });
    return this.http.delete(`${this.baseUrl}/${"delete"}`,{headers:header,body: user});

  }
  updateUser(user:any){

    let header= new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Request-Headers': 'DELETE',
     
    });
    return this.http.put(`${this.baseUrl}/${"delete"}`,{headers:header,body: user})

  }
  

}
