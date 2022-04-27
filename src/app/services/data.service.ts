import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from 'src/app/models/Dog';
import { Raza } from 'src/app/models/Dog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {
    this.getStorage();
    this.getRaces();
  }

  public dogList:Dog[]=[];
  public razaList:Raza[]=[];

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

  getRaces(){
    this.getAllRaces().subscribe((res: any) => {
       for (const key in res.message) {
         if (Object.prototype.hasOwnProperty.call(res.message, key)) {
           const element = res.message[key];       
         }
         this.getImage(key).subscribe((res2:any)=>{       
         this.razaList.push({img:res2.message,raza:key,cantidadInscritos:0})          
         });     
       }
     })
  }

  saveStorage() {
    localStorage.setItem('dog', JSON.stringify(this.dogList));    
  }

  getStorage() {
    if (localStorage.getItem('dog')) {
      this.dogList = JSON.parse(localStorage.getItem("dog")+"");
       console.log(this.dogList);    
    } else {
      this.dogList = [];
      console.log(this.dogList); 
    } 
  }  
} 
