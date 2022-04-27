import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {filter} from "rxjs";
import {map} from "rxjs/operators";
import {TokenStorageService} from "./_services/token-storage/token-storage.service";
import {User} from "./_interfaces/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = this.titleService.getTitle();
  constructor(private router :Router, private titleService:Title,private tokenStorageService: TokenStorageService) {
  }
  showFiller = false;
  @ViewChild('sidenav') sidenav?: MatSidenav ;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  user_profile:User = this.tokenStorageService.getUser();
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  isLog(){
    return !!this.tokenStorageService.getUser().username;
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate([""]);
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
           this.titleService.setTitle(`KTheO - ${title}`);
          this.title = this.titleService.getTitle();
        }
      });
  }


}
