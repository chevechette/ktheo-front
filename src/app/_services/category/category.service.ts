import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from "src/app/_interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiURL:string = environment.API_URL + "/category"

  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiURL);
  }
}


