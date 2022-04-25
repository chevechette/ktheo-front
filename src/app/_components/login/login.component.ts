import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth/auth.service";
import {TokenStorageService} from "../../_services/token-storage/token-storage.service";
import {CreateUser} from "../../_interfaces/dto/create-user";
import {User} from "../../_interfaces/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  userDisplayed: User = this.tokenStorage.getUser();

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  Signform: any = {
    username: null,
    email: null,
    password: null
  };
  roles: string[] = [];
  isSuccessful = false;
  isSignUpFailed = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }


  onSignSubmit(): void {
    const { username, email, password } = this.Signform;
    let userSigned:CreateUser = {username:username,mail:email,password:password}
    this.authService.register(userSigned).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }

}
