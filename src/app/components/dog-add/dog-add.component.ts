import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Dog } from 'src/app/models/Dog';
import { ActivatedRoute} from '@angular/router';
import  Swal from 'sweetalert2';

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
      nombre: new FormControl(null , [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]),
      fecha_nac: new FormControl(null , [Validators.required, Validators.maxLength(10)]),
      edad: new FormControl(null , [Validators.required, Validators.pattern('[0-9]*')])
    });
  }

  getRaza(raza: String){
    let upper = raza.charAt(0).toUpperCase();
    let slice = raza.slice(1);
    this.race = upper + slice;
  }

  onSubmit(){
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) =>{  
        control.markAllAsTouched(); 
        Swal.fire({
          title:'Campos Obligatorios',
          icon:'error',
          allowOutsideClick: false,
        });  
      });
      return;
    }
    let id = (this.api.dogList.length)+1;
    let dog: Dog = {
      id: id,
      raza: this.raza,
      nombre: this.form.value.nombre,
      fecha_nac: this.form.value.fecha_nac,
      edad: this.form.value.edad
    };
    this.api.dogList.push(dog);
    this.api.saveStorage();
    Swal.fire({
      title:'Registro Exitoso',
      icon:'success'
    });
    this.form.reset();
  } 
}
