import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDataService } from './movies-data.service';
import {Modal,ModalModule} from 'ng2-modal';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MoviesListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule
  ],
  providers: [MoviesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
