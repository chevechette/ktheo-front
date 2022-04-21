import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./_components/home/home.component";
import {ProfileComponent} from "./_components/profile/profile.component";
import {BoardUserComponent} from "./_components/board-user/board-user.component";
import {LoginComponent} from "./_components/login/login.component";

const routes: Routes = [
  {
    path : "",
    component: HomeComponent

  },{
    path: "profile",
    component:ProfileComponent
  },{
    path: "dashboard",
    component:BoardUserComponent
  },{
    path: "login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
