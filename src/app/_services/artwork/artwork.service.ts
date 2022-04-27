import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../../_interfaces/user";
import {Artwork} from "../../_interfaces/artwork";
import {Category} from "../../_interfaces/category";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreateArtwork } from 'src/app/_interfaces/dto/create-artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  apiURL:string = environment.API_URL + "/artwork"

  date : Date = new Date();
  category1 : Category[] = [{id: 1, category:"banger"}]
  ELEMENT_DATA: Artwork[] = [
    {
      id:1,
      title:"La Paint",
      description:"",
      owner:0,
      createdOn:this.date,
      estimation:"",
      isRestricted:false,
      location:"",
      auctionList:"",
      category:this.category1[0],
      creator:"Monet",
      creationLocation:"Paris",
      tags:[],
      estimatedPrice:"3 BTC",
      photos:[],
      reports:[],
      kudos:[],
      auction:0
    }
  ];
  constructor(private httpClient: HttpClient) { }

  getArtworks(){
    return of(this.ELEMENT_DATA)
    //return this.http.get(this.API_URL + 'admin', { responseType: 'text' });
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


