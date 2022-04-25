import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {User} from "../../_interfaces/user";
import {Artwork} from "../../_interfaces/artwork";
import {Category} from "../../_interfaces/category";


@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  date : Date = new Date();
  category1 : Category[] = [{id: 1,name:"banger"}]
  ELEMENT_DATA: Artwork[] = [
    {id:1,name:"La Paint",description:"",owner:0,createdOn:this.date,estimation:"",restricted:false,location:"",auctionList:"",category:this.category1[0]}
  ];
  constructor(/*private httpClient: HttpClient*/) { }

  getArtworks(){
    return of(this.ELEMENT_DATA)
    //return this.http.get(this.API_URL + 'admin', { responseType: 'text' });
  }

  getCategoriesName(){
    return of( this.category1.map(p=>p.name))
  }

}
