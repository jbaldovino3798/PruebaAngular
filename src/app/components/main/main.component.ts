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

  razaList:Raza[]=[];  

  constructor(public api:DataService, private router: Router) { }

  ngOnInit(): void {
    this.razaList = this.api.razaList;
  } 

  goToAdd(raza:String, img: String) {
    this.router.navigate(['/add'], { queryParams: { race: raza, image: img} });
  }   

  goToList(raza:String) {
    this.router.navigate(['/list'], { queryParams: { race: raza } });
  }
 }


