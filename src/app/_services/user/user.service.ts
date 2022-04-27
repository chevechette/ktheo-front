import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

import {User} from "../../_interfaces/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Profile} from "../../_interfaces/profile";
import {AuthService} from "../auth/auth.service";
import {TokenStorageService} from "../token-storage/token-storage.service";
import {UserData} from "../../_interfaces/user-data";
import {PasswordChangeCheckerResponse} from "../../_interfaces/dto/password-change-checker-response";



const BASE_API = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

user!:User;

  private API_URL?: string;
  date : Date = new Date();
  img = "https://cdn.imgbin.com/16/16/4/imgbin-pok-mon-go-computer-icons-video-games-pokemon-black-white-cute-icon-gDyx43bfKWFeCqe1nDaxnKcsL.jpg"
  profil1: Profile = {id:1,avatar:this.img,description:"",language:"fr_FR",views:0};
  userDetails ={locale:"FR_fr",birthDate:this.date,creationDate: this.date,lastSeen:this.date,facebookLink:"",twitterLink:'',instagramLink:'',tutorialized:true};



  getUser():Observable<User>{
    return this.http.get<User>(BASE_API+'/api/user/'+this.tokenService.getUser().userId,httpOptions)
  }

  checkPassword(currentPassword:string):Observable<boolean> {
    return this.http.post<boolean>(BASE_API+'/api/auth/'+this.tokenService.getUser().userId,currentPassword,httpOptions)
  }

  updateUserData(userData:UserData):Observable<UserData>{
    return this.http.put<UserData>(BASE_API+'/api/userdata/',userData,httpOptions);

  }
  updateUserPassword(newPassword:string):Observable<User> {
    return this.http.put<User>(BASE_API+'/api/user/'+this.tokenService.getUser().userId,newPassword,httpOptions)

  }

  getUsersProfile():Observable<any>{
    return this.http.get(BASE_API+'/api/profile/'+this.tokenService.getUser().userId,httpOptions)
  }

  getUsersData():Observable<any>{
    return this.http.get(BASE_API+'/api/userdata/'+this.tokenService.getUser().userId,httpOptions)
  }


  constructor(private http: HttpClient,private tokenService:TokenStorageService) { }
  /*
  getPublicContent(): Observable<any> {
    return this.http.get(this.API_URL + 'all', { responseType: 'text' });
  }*/
  getUserBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'user', { responseType: 'text' });
  }
  /*
  getModeratorBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'admin', { responseType: 'text' });
  }*/


}
