import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

import {User} from "../../_interfaces/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL?: string;
  ELEMENT_DATA: User[] = [
    {id:0, email: 'Post One', username: 'Web Development', password: "Allstar", isVerified: true,userDetails:[]},
    {id: 1, email: 'Post Two', username: 'Android Development', password: "Allstar", isVerified: true,userDetails:[]},
    {id: 2, email: 'Post Three', username: 'IOS Development', password: "Allstar", isVerified: true,userDetails:[]},
    {id: 3, email: 'Post Four', username: 'Android Development', password: "Allstar", isVerified: true,userDetails:[]},
    {id: 4, email: 'Post Five', username: 'IOS Development', password: "Allstar", isVerified: true,userDetails:[]},
    {id: 5, email: 'Post Six', username: 'Web Development', password: "Allstar", isVerified: true,userDetails:[]},
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
