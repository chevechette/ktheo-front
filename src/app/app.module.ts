import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { BoardAdminComponent } from './_components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './_components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './_components/board-user/board-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import { LoginComponent } from './_components/login/login.component';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import { SidenavComponent } from './_components/sidenav/sidenav.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import {MatInputModule} from "@angular/material/input";
import { ArtworkComponent } from './_components/artwork/artwork.component';
import {NgxTwitterTimelineModule} from "ngx-twitter-timeline";
import {NgxTwitterWidgetsModule} from "ngx-twitter-widgets";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LoginComponent,
    SidenavComponent,
    DashboardComponent,
    ArtworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatInputModule,
    NgxTwitterWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
