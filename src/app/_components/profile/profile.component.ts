import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user/user.service";
import {Observable} from "rxjs";
import {DataSource} from "@angular/cdk/collections";
import {User} from "../../_interfaces/user";
import {UserDetails} from "../../_interfaces/user-details";
import {TokenStorageService} from "../../_services/token-storage/token-storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataService: UserService,private tokenService:TokenStorageService) {
  }

  displayedColumns = ['id', 'username', 'email', 'isVerified','lastSeen','creationDate'];


  isLog(){
    return !!this.tokenService.getUser().username;
  }
  userData !: Observable<UserDetails[]>;
  userdata !: User;

  ngOnInit(): void {
    this.dataService.getUser().subscribe({
      next: value => this.userdata = value
    });
    console.log(this.userdata)
  }

  connect() {
    this.dataService.getUsersData().subscribe({
      next: value => this.userData = value,
      error:error => console.log(error),
      complete:() => console.log("complete")
    });
  }

  disconnect() {
  }

}


