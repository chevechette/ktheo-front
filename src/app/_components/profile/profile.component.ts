import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user/user.service";
import {Observable} from "rxjs";
import {DataSource} from "@angular/cdk/collections";
import {User} from "../../_interfaces/user";
import {UserData} from "../../_interfaces/user-data";
import {TokenStorageService} from "../../_services/token-storage/token-storage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";
import {AddressService} from "../../_services/address.service";
import {Address} from "../../_interfaces/address";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user !: User;
  adresses!: Address[];
  informationFormGroup : FormGroup = this.fb.group({});
  preferencesFormGroup : FormGroup = this.fb.group({});
  userAdressesFormGroup : FormGroup = this.fb.group({});
  userInformationSubmit: boolean=false;
  userPreferenceSubmit:boolean=false;

  constructor(private dataService: UserService,
              private tokenService:TokenStorageService,
              private fb: FormBuilder,
              private addressService: AddressService) {

  }

  isLog(){
    return !!this.tokenService.getUser().username;
  }


  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
  this.dataService.getUser().subscribe(data=>{
    this.user=data;
    },
    error => {
      console.log(error);
    },()=> this.informationFormGroup  = this.fb.group({
        birthDate:[this.user?.userData.birthDate],
        facebookId:[this.user?.userData.facebookLink],
        twitterId:[this.user?.userData.twitterLink],
        instagramId:[this.user?.userData.instagramLink]
      }));
  }

  getUserAddresses(){
    this.addressService.getAllAddresses().subscribe(data=>{
      this.adresses=data;
    },
      error=>{
      console.log(error);
      })
  }

  getErrorMessage() {
    return "Champ invalide";
  }

  disconnect() {
  }

  onSubmitInformation() {
    this.userInformationSubmit=true;
    if(this.informationFormGroup.invalid){
      return;
    }
    let userData:UserData = {
      id:this.user.userData.id,
      locale:this.user.userData.locale,
      birthDate:this.informationFormGroup.value.birthDate,
      creationDate:this.user.userData.creationDate,
      lastSeen:this.user.userData.lastSeen,
      facebookLink:this.informationFormGroup.value.facebookId,
      twitterLink:this.informationFormGroup.value.twitterId,
      instagramLink:this.informationFormGroup.value.instagramId,
      tutorialized:this.user.userData.tutorialized
    }

    this.dataService.updateUserData(userData)
      .subscribe({
      next: ok => {
      }});

  }
}


