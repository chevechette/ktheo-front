import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./_components/home/home.component";
import {ProfileComponent} from "./_components/profile/profile.component";
import {BoardUserComponent} from "./_components/board-user/board-user.component";
import {LoginComponent} from "./_components/login/login.component";
import {DashboardComponent} from "./_components/dashboard/dashboard.component";
import {ArtworkService} from "./_services/artwork/artwork.service";

const routes: Routes = [
  {
    path : "",
    pathMatch:'full',
    component: DashboardComponent
  },{
    path: "profile",
    component:ProfileComponent
  },{
    path: "login",
    component:LoginComponent
  },{
    path: "artworks",
    component:ArtworkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
