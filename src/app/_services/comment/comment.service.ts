import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Comment } from "src/app/_interfaces/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiURL:string = environment.API_URL + "/comment"

  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.apiURL);
  }

  getAllByArtwork(artworkId : number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.apiURL}/artwork/${artworkId}`);
  }

  getById(id: number): Observable<Comment> {
    return this.httpClient.get<Comment>(`${this.apiURL}/${id}`)
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/new`, data);
  }

  update(id: any, data: Comment): Observable<any> {
    return this.httpClient.put(`${this.apiURL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }
}


