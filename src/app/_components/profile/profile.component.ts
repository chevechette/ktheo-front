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

  UserDetailForm:any = {
    locale:null,
    birthDate:null,
    creationDate:null,
    lastSeen:null,
    facebookLink:null,
    twitterLink:null,
    instagramLink:null,
  }



  isLog(){
    console.log(this.userdata)
    return !!this.tokenService.getUser().username;
  }
  userdata !: User;

  userdetailsData !: UserDetails;


  ngOnInit(): void {
    this.dataService.getUser().subscribe({
      next: value => this.userdata = value,
      complete: () =>  {
        this.userdetailsData = this.userdata.userData;
        let date:Date =new Date();
        date.setDate(this.userdetailsData.birthDate.getDate())
        console.log(date)
      }
    });
  }

  getErrorMessage() {
    return "Champ invalide";
  }

  disconnect() {
  }

}


