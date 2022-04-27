import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./_components/home/home.component";
import {ProfileComponent} from "./_components/profile/profile.component";
import {BoardUserComponent} from "./_components/board-user/board-user.component";
import {LoginComponent} from "./_components/login/login.component";
import {DashboardComponent} from "./_components/dashboard/dashboard.component";
import {ArtworkService} from "./_services/artwork/artwork.service";
import {ArtworkComponent} from "./_components/artwork/artwork.component";
import { ArtworkDetailsComponent } from './_components/artwork-details/artwork-details.component';
import { ArtworkFormComponent } from './_components/artwork-form/artwork-form.component';

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
  },{
    path: "login",
    component:LoginComponent,
    data:{title: "Login"}
  },{
    path: "artworks",
    component:ArtworkComponent,
    data:{title:"Artworks"}
  },
  { path: 'artwork/new', component: ArtworkFormComponent, data:{title:"Create Artwork"}},
  { path: 'artwork/:id', component: ArtworkDetailsComponent, data:{title:"Artwork"} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
