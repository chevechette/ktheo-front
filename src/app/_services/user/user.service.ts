import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

import {User} from "../../_interfaces/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL?: string;
  date : Date = new Date();
  userDetails ={locale:"FR_fr",birthDate:this.date,creationDate: this.date,lastSeen:this.date,facebookLink:"",twitterLink:'',instagramLink:'',tutorialized:true};
  ELEMENT_DATA: User[] = [
    {id:0, email: 'me@ktheo.com', username: 'ME', password: "Allstar", isVerified: true,userDetails:this.userDetails},
    {id: 1, email: 'myself@ktheo.com', username: 'MYSELF', password: "Allstar", isVerified: true,userDetails:this.userDetails},
    {id: 2, email: 'i@ktheo.com', username: 'I', password: "Allstar", isVerified: true,userDetails:this.userDetails},
  ];



  getData(): Observable<User[]> {
    return of<User[]>(this.ELEMENT_DATA);
  }


  addPost(data: User) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index: number) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }

  constructor(/*private http: HttpClient*/) { }
  /*
  getPublicContent(): Observable<any> {
    return this.http.get(this.API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'admin', { responseType: 'text' });
  }*/
}
