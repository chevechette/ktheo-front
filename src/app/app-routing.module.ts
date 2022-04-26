import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./_components/home/home.component";
import {ProfileComponent} from "./_components/profile/profile.component";
import {BoardUserComponent} from "./_components/board-user/board-user.component";
import {LoginComponent} from "./_components/login/login.component";
import {DashboardComponent} from "./_components/dashboard/dashboard.component";
import {ArtworkService} from "./_services/artwork/artwork.service";
import {ArtworkComponent} from "./_components/artwork/artwork.component";
import {AddressesComponent} from "./_components/addresses/addresses.component";

const routes: Routes = [
  {
    path : "",
    pathMatch:'full',
    component: DashboardComponent,
    data:{title:"Accueil"}
  },{
    path: "profile",
    component:ProfileComponent,
    data:{title:"Your Profile"}
  },
  {
    path: "login",
    component:LoginComponent,
    data:{title: "Login"}

},{
    path: "artworks",
    component:ArtworkComponent,
    data:{title:"Artworks"}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
