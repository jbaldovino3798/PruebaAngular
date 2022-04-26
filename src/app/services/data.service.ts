import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from 'src/app/models/Dog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {
    this.getStorage();
  }

  public dogList:Dog[]=[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllRaces(){
    let url = "https://dog.ceo/api/breeds/list/all";

    return this.http.get<any>(url);
  }

  getImage(raza : String):Observable<any[]>{
    let url = "https://dog.ceo/api/breed/"+raza+"/images/random";
    return this.http.get<any[]>(url);
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.dogList));    
  }

  getStorage() {
    /*if (localStorage.getItem('data')) {
      this.lista = JSON.parse(localStorage.getItem('data'));
       console.log(this.list[0].perros);    
    } else {
      this.dogList = [];
    }*/   
  }  
} 
