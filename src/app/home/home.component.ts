import { Component, OnInit } from '@angular/core';
import { HttpService } from '../hbo-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public allBooks;
  public allHouses;
  public allCharacters;

  constructor(public HttpService: HttpService) {
  }


  ngOnInit() {

    this.allBooks = this.HttpService.getAllBooks().subscribe(
      data => {
        this.allBooks = data;
        console.log("All books length - " + this.allBooks.length);
        console.log(data.name);
      },
      error => {
        console.log(error.message);
      }
    );
   
    this.allHouses = this.HttpService.getAllHouses().subscribe(
      house => {
        this.allHouses = house;
        console.log("All houses length - " + this.allHouses.length);
        console.log(house.name);
      },
      error => {
        console.log(error.message);
      }
    );

     this.allCharacters = this.HttpService.getAllCharacters().subscribe(
       data => {
        this.allCharacters = data;
        console.log("All characters length - " + this.allCharacters.length);
         console.log(data.name);
      },
       error => {
         console.log(error.message);
       }
     );
  }
}


