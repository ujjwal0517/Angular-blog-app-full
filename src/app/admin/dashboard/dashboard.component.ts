import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormControl, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { HttpclientService } from 'src/app/service/httpclient.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
post : any;
name:string = ""
blogPost = new FormGroup({
  title: new FormControl(),
  Content: new FormControl()
})


  constructor(private adminserviceService: AuthService, private router:Router, private httpclient: HttpclientService) {
    this.getData();
    
   }
  ngOnInit(): void {
    this.name = this.adminserviceService.getLoginData()
    
  }
  getData(){
    this.httpclient.getPosts().subscribe(
      (post)=> {this.post = post},
      (error)=>{console.log(error)}
    )
  }


}
