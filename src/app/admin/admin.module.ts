import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../Interceptors/token.interceptor';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    PostComponent
 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true
  }]
})
export class AdminModule { }
