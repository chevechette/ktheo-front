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

  passwordIsNotOk:boolean=false;



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
  passwordNotValid() {
    return "Le mot de passe n'est pas valide";
  }
  passwordNotTheSame() {
    return "Les nouveaux mots de passes ne sont pas égaux";
  }

  onSubmitChangePassword() {
   let isVerified:boolean=false;
    this.dataService.checkPassword(this.userInfoFormGroup.value.currentPassword).subscribe(data => {
      isVerified=data;
      console.log("value:"+isVerified.valueOf())
      console.log(data)
      },
      error => {
        console.log(error);
      },()=>{if(isVerified){
        console.log("isVerified is true : "+isVerified)
        this.modifyPassword()
    }else{
        console.log("not true : "+isVerified)
    }})

  }
  modifyPassword():void{
    let newPassword = this.userInfoFormGroup.value.newPassword;
    console.log("newPassword : "+newPassword);
    let newPasswordChecker = this.userInfoFormGroup.value.newPasswordChecker;
    console.log("newPasswordChecker:"+newPasswordChecker)
    if(newPassword==newPasswordChecker){
      console.log("newPassword==newPasswordChecker")
      this.dataService.updateUserPassword(newPassword) .subscribe({
        next: ok => {
        }
      });
    }

  }
}
