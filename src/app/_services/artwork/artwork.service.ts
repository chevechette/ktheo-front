import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../../_interfaces/user";
import {Artwork} from "../../_interfaces/artwork";
import {Category} from "../../_interfaces/category";
import { environment } from 'src/environments/environment';
import { CreateArtwork } from 'src/app/_interfaces/dto/create-artwork';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const BASE_API = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin':'*'})
};

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  apiURL:string = environment.API_URL + "/artwork"

  date : Date = new Date();

  constructor(private httpClient: HttpClient) { }

  getArtworks():Observable<Artwork[]>{
  return this.httpClient.get<Artwork[]>(BASE_API+"/api/artwork", httpOptions);
  }

  getArtwork(id:number):Observable<Artwork>{
    return this.httpClient.get<Artwork>(BASE_API+"api/artwork/id",httpOptions)
  }
  
  getAll(): Observable<Artwork[]> {
    return this.httpClient.get<Artwork[]>(this.apiURL);
  }

  getById(id: number): Observable<Artwork> {
    return this.httpClient.get<Artwork>(`${this.apiURL}/${id}`)
  }

  create(data: CreateArtwork): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/new`, data);
  }

  update(id: any, data: Artwork): Observable<any> {
    return this.httpClient.put(`${this.apiURL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }
}


