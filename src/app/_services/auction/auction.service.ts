import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Auction} from "../../_interfaces/auction";
import {Observable} from "rxjs";
import {Biding} from "../../_interfaces/biding";

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
    return this.http.get<Auction[]>(BASE_API+"/api/auction",httpOptions)
  }

  getAuction(id:number):Observable<Auction>{
    return this.http.get<Auction>(BASE_API+"/api/auction/"+id,httpOptions)
  }

  getAuctionsBid(id:number):Observable<Biding[]>{
    return this.http.get<Biding[]>(BASE_API+"/api/bid/auction/"+id,httpOptions)
  }


}
