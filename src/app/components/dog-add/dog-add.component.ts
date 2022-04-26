import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Dog } from 'src/app/models/Dog';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dog-add',
  templateUrl: './dog-add.component.html',
  styleUrls: ['./dog-add.component.css']
})
export class DogAddComponent implements OnInit {

  race : string = "";
  raza : string = "";
  image : string = "";
  form : FormGroup = new FormGroup({});
  dog : Dog = new Dog(0,"","","",0);

  constructor(public api:DataService, private ActivatedRouter: ActivatedRoute) {
     this.ActivatedRouter.queryParams.subscribe(params=>{
      this.raza = params['race'];
      this.image = params['image'];
    }); 

    this.crearForm();
   }

  ngOnInit(): void {
    this.getRaza(this.raza);
  }

  crearForm(){
    this.form= new FormGroup({
      nombre: new FormControl(null , [Validators.required, Validators.minLength(5)]),
      fecha_nac: new FormControl(null , Validators.required),
      edad: new FormControl(null , Validators.required)
    });
  }

  getRaza(raza: String){
    let upper = raza.charAt(0).toUpperCase();
    let slice = raza.slice(1);
    this.race = upper + slice;
  }

  onSubmit(){
    let id = (this.api.dogList.length)+1;
    this.dog.id = id;
    this.dog.raza = this.raza;
    this.api.dogList.push(this.dog);
    console.log(this.api.dogList);
  }
}
