import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  email:string = ""
  
    adminCredential= {
      Email: 'admin@gmail.com',
      Password: 'admin123'
    }
   
  constructor(private router: Router, private adminserviceService: AuthService) { }

  ngOnInit(): void {
    if(this.adminserviceService.returnToken()!==null){
      this.router.navigate(['admin/dashboard'])
    }
  }
  loginForm = new FormGroup({
    Email: new FormControl(),
    Password: new FormControl()
  })
  onSubmit(){
    this.email = this.loginForm.value.Email
    if(this.loginForm.value.Email === this.adminCredential.Email && this.loginForm.value.Password===this.adminCredential.Password){
     const token = `${this.email}_manchesterisred`
       this.adminserviceService.setLoginData(this.email);
       this.adminserviceService.setToken(token)
       this.router.navigateByUrl('admin/dashboard')
    }else{
     console.log("unauthenticated")
    }
  }

}
