import { Component, OnInit } from '@angular/core';

import {HttpService} from '../hbo-http.service';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {

  public allHouses;
   
  constructor(private HttpService:HttpService) { }

  ngOnInit() {
    this.allHouses = this.HttpService.getAllHouses().subscribe(
      data => {
        this.allHouses = data;
        console.log("All books length - " + this.allHouses.length);
        console.log(data.name);
      },
      error => {
        console.log(error.message);
      }
    );
  }

}
