import {LOCALE_ID, NgModule} from '@angular/core';
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
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSliderModule} from "@angular/material/slider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { UserDetailsComponent } from './_components/user-details/user-details.component';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ArtworkDetailsComponent } from './_components/artwork-details/artwork-details.component';
import { ArtworkFormComponent } from './_components/artwork-form/artwork-form.component';
import { CountdownComponent } from './_components/countdown/countdown.component';
import {MatRippleModule} from "@angular/material/core";
import { AuctionComponent } from './_components/auction/auction.component';
import { AuctionsComponent } from './_components/auctions/auctions.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { TransactionsComponent } from './_components/transactions/transactions.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatSortModule} from "@angular/material/sort";
import { MatStep } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';

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
    ArtworkComponent,
    UserDetailsComponent,
    ArtworkDetailsComponent,
    ArtworkFormComponent,
    CountdownComponent,
    AuctionComponent,
    AuctionsComponent,
    TransactionsComponent,
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
    NgxTwitterWidgetsModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatSliderModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    MatStepperModule,
    MatRippleModule,
    MatDividerModule,
    MatExpansionModule
 ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
