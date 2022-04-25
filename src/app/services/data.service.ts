import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from '../models/Race';
import { Image } from '../models/Image';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllRaces():Observable<Race[]>{
    let url = "https://dog.ceo/api/breeds/list/all";

    return this.http.get<Race[]>(url);
  }

  getImages(raza : String):Observable<Image[]>{
    let url = "https://dog.ceo/api/breed/"+raza+"/images/random";
    return this.http.get<Image[]>(url);
  }
} 
