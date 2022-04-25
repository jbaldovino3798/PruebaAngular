import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Race } from '../../models/Race';
import { Image } from '../../models/Image';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

   races: Race[] = [];
   images: any = [];

  constructor(public api:DataService) { }

  ngOnInit(): void {
    this.api.getAllRaces().subscribe((e: Race[]) => {
      this.races = e;
      console.log(this.races);
    })

    this.api.getImages("affenpinscher").subscribe((r: Image[]) => {
      this.images = r;
      console.log(this.images.message);
    }) 
  }

 }


