import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  private name = ""
  
  setLoginData(name:any){
    this.name = name
  }
  getLoginData(){
    return this.name;
  }
  setToken(token:string){
    localStorage.setItem('token', token)
    // location.reload() 
    
  }
  returnToken(){
    return localStorage.getItem('token')
   
   
  }
  isloggedIn(){
    if(this.returnToken()!=null){
      return true
    }
    return false
  }
  logout(){
   
    localStorage.removeItem('token')
    location.reload() 
  
  }
}
