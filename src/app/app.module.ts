import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Details } from './details/details.component';
import { HouseViewComponent } from './house-view/house-view.component'
import { BookViewComponent } from './book-view/book-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { createComponent } from '@angular/compiler/src/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpService } from './hbo-http.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderByPipe } from './order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Details,
    HouseViewComponent,
    BookViewComponent,
    CharacterViewComponent,
    NotFoundComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:CharacterViewComponent},
      {path:'blog/:blogId/:type/:imageName',component:Details},
      {path:'create',component:HouseViewComponent},
      {path:'edit',component:BookViewComponent},
      {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
