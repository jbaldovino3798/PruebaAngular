import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Raza } from 'src/app/models/Dog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

   lista:Raza[]=[];
   

  constructor(public api:DataService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllRaces().subscribe((res: any) => {

     /*  this.races = e;
      console.log(this.races); */
      for (const key in res.message) {
        if (Object.prototype.hasOwnProperty.call(res.message, key)) {
          const element = res.message[key];       
        }
        this.api.getImage(key).subscribe((res2:any)=>{       
        this.lista.push({img:res2.message,raza:key,cantidadInscritos:0})          
        });     
      }
      //console.log(this.lista)
    })
  } 

  goToAdd(raza:String, img: String) {
    this.router.navigate(['/add'], { queryParams: { race: raza, image: img} });
  }   

  goToList(raza:String) {
    this.router.navigate(['/list'], { queryParams: { race: raza } });
  }
 }


