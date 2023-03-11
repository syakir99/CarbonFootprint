import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 api = "http://localhost:8080";
  constructor(private http : HttpClient) { }

  login(credentials : Login){
    console.log("service login");
    return this.http.post(this.api + "/api/authenticate", credentials);
    //authenticate
  }

  logout(){
    localStorage.clear();
    
  }
}