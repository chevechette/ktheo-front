import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../_interfaces/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../_services/user/user.service";
import {TokenStorageService} from "../../_services/token-storage/token-storage.service";

@Component({
  selector: 'app-user-info-change',
  templateUrl: './user-info-change.component.html',
  styleUrls: ['./user-info-change.component.css']
})
export class UserInfoChangeComponent implements OnInit {

  @Input("user")
  user!:User;

  userInfoFormGroup: FormGroup = this.fb.group({});

  constructor(private dataService: UserService,
              private fb: FormBuilder,
              private tokenService:TokenStorageService
               ) { }

  ngOnInit(): void {
    this.userInfoFormGroup = this.fb.group({
      currentPassword:['',[Validators.required]],
      newPassword: ['',[Validators.required]],
      newPasswordChecker: ['',[Validators.required]]
    })
  }

  getErrorMessage() {
    return "Champ invalide";
  }

  onSubmitChangePassword() {
    console.log(this.dataService.checkPassword(this.userInfoFormGroup.value.currentPassword).subscribe({next:ok=>{}}));
    if(this.dataService.checkPassword(this.userInfoFormGroup.value.currentPassword).subscribe({next:ok=>{}})){
      console.log("MDP OK")
    }else{
      console.log("MDP PAS OK")
    }

  }
}
