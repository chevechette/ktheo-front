import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../../_interfaces/user";
import {Artwork} from "../../_interfaces/artwork";
import {Category} from "../../_interfaces/category";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const BASE_API = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})
};
@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  date : Date = new Date();
  category1 : Category[] = [{id: 1,name:"banger"}]

  constructor(private http: HttpClient) { }

  getArtworks():Observable<Artwork[]>{
  return this.http.get<Artwork[]>(BASE_API+"/api/artwork", httpOptions);
  }

  getArtwork(id:number):Observable<Artwork>{
    return this.http.get<Artwork>(BASE_API+"api/artwork/id",httpOptions)
  }

  getCategoriesName(){
    return of( this.category1.map(p=>p.name))
  }

}
