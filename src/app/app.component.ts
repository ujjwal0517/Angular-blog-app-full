import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hahahahahahahhaha';
  url = true
  constructor(private app: AuthService){
   
  }
  ngOnInit(): void {
    if(this.app.isloggedIn() == true){
      console.log("hello world")
      this.url = false
     
     }else{
     
      this.url = true
     }
    }
    onLogout(){
      this.app.logout();
    
    }
  }


