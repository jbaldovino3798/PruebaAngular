import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Raza } from 'src/app/models/Dog';
import { Dog } from 'src/app/models/Dog';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.component.html',
  styleUrls: ['./dog-edit.component.css']
})

export class DogEditComponent implements OnInit {

  id : number = 0;
  razaList :Raza[]=[];
  form : FormGroup = new FormGroup({});
  dog : Dog = new Dog(0,"","","",0);

  constructor(public api:DataService, private ActivatedRouter: ActivatedRoute) { 
    this.ActivatedRouter.queryParams.subscribe(params=>{
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.razaList = this.api.razaList;
    this.crearForm();
  }

  crearForm(){
    this.form= new FormGroup({
      raza: new FormControl(null, [Validators.required]),
      nombre: new FormControl(null , [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]),
      fecha_nac: new FormControl(null , [Validators.required, Validators.maxLength(10)]),
      edad: new FormControl(null , [Validators.required, Validators.pattern('[0-9]*')])
    });
  }

  getDog(id: number){  
    this.dog = this.api.dogList[4];
    console.log(this.dog);
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
    let obj: Dog = {
      id: this.dog.id,
      raza: this.form.value.raza,
      nombre: this.form.value.nombre,
      fecha_nac: this.form.value.fecha_nac,
      edad: this.form.value.edad
    };
    this.api.dogList.splice((this.dog.id),1,obj);
    this.api.saveStorage();
    Swal.fire({
      title:'Edicion Exitosa',
      icon:'success'
    });
    this.form.reset();
  } 
}
