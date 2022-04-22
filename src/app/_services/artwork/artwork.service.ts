import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {User} from "../../_interfaces/user";
import {Artwork} from "../../_interfaces/artwork";


@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  date : Date = new Date();
  ELEMENT_DATA: Artwork[] = [
    {id:1,name:"",description:"",owner:0,createdOn:this.date,estimation:"",restricted:false,location:"",auctionList:""}
  ];
  constructor(/*private httpClient: HttpClient*/) { }

  getArtworks(){
    return of(this.ELEMENT_DATA)
    //return this.http.get(this.API_URL + 'admin', { responseType: 'text' });
  }


}
