import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Biding} from "../../_interfaces/biding";
import {CreateBid} from "../../_interfaces/dto/create-bid";

const BASE_API = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})
};

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private http:HttpClient) { }


  getBids():Observable<Biding[]>{
    return this.http.get<Biding[]>(BASE_API+'/api/bid',httpOptions)
  }

  sendBid(bid:CreateBid){
    return this.http.post(BASE_API+'/api/bid/new',bid,httpOptions)
  }




}
