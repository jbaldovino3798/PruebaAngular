import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Dog } from 'src/app/models/Dog';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  
  race : String = "";
  raza : String = "";
  dogList : Array<Dog> = [];
  constructor(public api:DataService, private ActivatedRouter: ActivatedRoute, private router: Router) { 
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
    for(let i=0; i<this.api.dogList.length; i++){
      if(this.api.dogList[i].raza == this.raza){
        this.dogList.push(this.api.dogList[i]);
      }
    }    
  }

  goToEdit(id: number){
    this.router.navigate(['/edit'], { queryParams: { id: id } });
  }

  deleteDog(id:number){
    Swal.fire({
      title: 'Esta seguro?',
      text: "No podras revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
    this.api.dogList.splice((id-1),1);
    this.api.saveStorage();
  if (result.value) {
    Swal.fire(
      'Eliminado',
      'El perro ha sido eliminado.',
      'success') .then(() => {   
        window.location.reload();
      })
  }})    
  }
}
