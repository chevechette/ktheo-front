import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateTransaction} from "../../_interfaces/dto/create-transaction";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})
};
const AUTH_API = 'http://localhost:8080/api/transaction';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }

  registerTransaction(tr:CreateTransaction):Observable<any>{
    return this.http.post(AUTH_API+'/new',tr,httpOptions)
  }
}
