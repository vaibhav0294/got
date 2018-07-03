import { Component, OnInit } from '@angular/core';
import {HttpService} from '../hbo-http.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  public allBooks;

  constructor(private HttpService:HttpService) { }

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
  }

}
