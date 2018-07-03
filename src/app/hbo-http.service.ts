import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpClientModule } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable()
export class HttpService {

  public currentBlog;
  public baseUrl = 'https://anapioficeandfire.com/api/';

  constructor(private _http: HttpClient) {

  }

  public getAllBooks(): any {
    let booksResponse = this._http.get(this.baseUrl + 'books');
    return booksResponse;
  }

  public getAllHouses(): any {
    let housesResponse = this._http.get(this.baseUrl + 'houses');
    return housesResponse;
  }

  public getAllCharacters(): any {
    let booksResponse = this._http.get(this.baseUrl + 'characters');
    return booksResponse;
  }

  public getDetails(baseUrl){
    let detailsResponce = this._http.get(baseUrl);
    return detailsResponce;
  }




  public getSingleBlogInformation(currentBlogId): any {


  }

}
