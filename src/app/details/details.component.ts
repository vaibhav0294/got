import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common'


import {ActivatedRoute, Router} from "@angular/router";
import { HttpService } from '../hbo-http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[Location]
})
export class Details implements OnInit {

  public type;
  public currentDetails;
  public imageName;

  constructor(private _route:ActivatedRoute, private router:Router,public HttpService: HttpService,private location:Location) { }

  ngOnInit() {
    let detailsUrl = this._route.snapshot.paramMap.get('blogId');
    this.type = this._route.snapshot.paramMap.get('type');
    this.imageName = this._route.snapshot.paramMap.get('imageName');
   
    console.log("Type : "+ this.type);
    console.log("URL : "+ detailsUrl);
    console.log("Type : "+ this.type);
    console.log("ImageName : "+ this.imageName);
    

    this.currentDetails = this.HttpService.getDetails(detailsUrl).subscribe(

      data => {
        this.currentDetails = data;
        console.log("All characters length - " + this.currentDetails.gender);
      },
      error => {
        console.log(error.message);
      }
    );
  }

  public goBackToPreviousPage(){
    this.location.back();
  }
}
