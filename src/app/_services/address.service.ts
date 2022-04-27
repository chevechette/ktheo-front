import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Address} from "../_interfaces/address";
import {TokenStorageService} from "./token-storage/token-storage.service";

const BASE_API = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})
};
@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private API_URL?: string;
  date : Date = new Date();
  img = "https://cdn.imgbin.com/16/16/4/imgbin-pok-mon-go-computer-icons-video-games-pokemon-black-white-cute-icon-gDyx43bfKWFeCqe1nDaxnKcsL.jpg"

  constructor(private http: HttpClient,
              private tokenService:TokenStorageService) { }

  getAllAddresses():Observable<Address[]>{
    return this.http.get<Address[]>(BASE_API+'/api/'+this.tokenService.getUser().userId+'/addresses')
}
  addAddress(address:Address):Observable<Address>{
    address.userId=this.tokenService.getUser().userId;
    return this.http.post<Address>(BASE_API+'/api/address',address,httpOptions)
  }

  deleteOne(id:number):Observable<Address>{
    console.log(id);
    return this.http.delete<Address>(BASE_API+'/api/address/'+id)
  }

  updateAddress(address:Address):Observable<Address>{
    return this.http.put<Address>(BASE_API+'/api/address/',address,httpOptions)
  }
}
