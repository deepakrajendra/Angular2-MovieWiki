import { Component,Input, OnChanges} from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { Movie } from '../movie';

@Component({
  selector: 'mv-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnChanges {
@Input() searchTerm:string="";
moviesList:any=[];
title:string="";
overview:string="";
rating:number;
releaseDate="";
posterPath="";
color:string;
error=false;
 
  constructor( public moviesData:MoviesDataService) {
   }
   

ngOnChanges()
{
  this.getMovies(); 
}

getDetails(movie:Movie)
{
  this.title=movie.title;
  this.overview=movie.overview;
  this.rating=movie.vote_average;
  this.releaseDate=movie.release_date;
  this.posterPath=movie.poster_path;
}
  getMovies()
  {
    if(this.searchTerm.length>1)
    {
    this.moviesData.searchMovie(this.searchTerm).subscribe(data=>
  {
    this.error=false;
    
    this.moviesList=data.results;
  },
  err=>
  {
    this.error=true;
  });
    
  }
  else
  this.moviesList=[];
  }
  
  //style star as per rating
  applyStyle()
  {
  if(this.rating<5)  return {'color':'red'};
  else if(this.rating>5) return {'color':'green'};
  else return {'color':'yellow'};
  }

}
