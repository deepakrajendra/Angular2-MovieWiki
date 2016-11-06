import { Component , OnInit} from '@angular/core';
import { SearchComponent } from './search/search.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { Movie } from './movie';
@Component({
  selector: 'mv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search:string="";
  movie:Movie;

  constructor(){}


  searchThis(searchWord:string)
  {
    this.search=searchWord;
  }

}
