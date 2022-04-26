import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Dog } from 'src/app/models/Dog';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  
  race : String = "";
  raza : String = "";
  dogList : Array<Dog> = [];
  constructor(public api:DataService, private ActivatedRouter: ActivatedRoute) { 
    this.ActivatedRouter.queryParams.subscribe(params=>{
      this.raza = params['race'];
    });

    this.getDogs(this.raza);
  }

  ngOnInit(): void {    
    this.getRaza(this.raza);
  }

  getRaza(raza: String){
    let upper = raza.charAt(0).toUpperCase();
    let slice = raza.slice(1);
    this.race = upper + slice;
  }  

  getDogs(raza: String){  
    console.log(raza);
    for(let i=0; i<this.api.dogList.length; i++){
      if(this.api.dogList[i].raza == this.raza){
        console.log("if");
        console.log(this.api.dogList[i]);
        this.dogList.push(this.api.dogList[i]);
      }else{
        console.log("else");
        console.log(this.api.dogList[i]);
      }
    }    
  }

  deleteDog(id:number, raza: string, nombre: string, fecha_nac: string, edad: number){
    const dog = new Dog(id,raza,nombre,fecha_nac,edad);
    this.dogList.push(dog);
    //this.saveStorage();
    console.log(this.dogList);
  }
}
