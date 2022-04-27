import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tag } from "src/app/_interfaces/tag";

@Injectable({
  providedIn: 'root'
})
export class TagService {
  apiURL:string = environment.API_URL + "/tag"

  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(this.apiURL);
  }

  getAllByArtwork(artworkId : number): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(`${this.apiURL}/artwork/${artworkId}`);
  }

  getById(id: number): Observable<Tag> {
    return this.httpClient.get<Tag>(`${this.apiURL}/${id}`)
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/new`, data);
  }

  update(id: any, data: Tag): Observable<any> {
    return this.httpClient.put(`${this.apiURL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }
}
