import { Component, OnInit } from '@angular/core';
import {HttpService} from "../hbo-http.service";

@Component({
  selector: 'app-about',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  public allCharacters;

  constructor(private HttpService:HttpService) { }

  ngOnInit() {
    this.allCharacters = this.HttpService.getAllCharacters().subscribe(
      data => {
        this.allCharacters = data;
        console.log("All books length - " + this.allCharacters.length);
        console.log(data.name);
      },
      error => {
        console.log(error.message);
      }
    );
  }


}
