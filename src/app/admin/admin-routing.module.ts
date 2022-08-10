import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path:'', children:[
    {path:'login', component: LoginComponent},
    {path:'dashboard',canActivate:[AdminGuard], component:DashboardComponent},
    {path:'createpost',canActivate:[AdminGuard], component: PostComponent}
  
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
