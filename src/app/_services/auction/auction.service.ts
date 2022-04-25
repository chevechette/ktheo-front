import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Auction} from "../../_interfaces/auction";
import {Observable} from "rxjs";

const BASE_API = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})
};

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http:HttpClient) {

  }

  getAuctions():Observable<Auction[]>{
    return this.http.get<Auction[]>(BASE_API+"/api/auctions/all",httpOptions)
  }


}
