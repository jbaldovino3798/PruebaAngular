import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Dog } from 'src/app/models/Dog';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.component.html',
  styleUrls: ['./dog-edit.component.css']
})
export class DogEditComponent implements OnInit {

  constructor(public api:DataService, private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  editDog(id:number, raza: string, nombre: string, fecha_nac: string, edad: number){
    const dog = new Dog(id,raza,nombre,fecha_nac,edad);
    this.api.dogList.push(dog);
    //this.saveStorage();
    console.log(this.api.dogList);
  }  
}
