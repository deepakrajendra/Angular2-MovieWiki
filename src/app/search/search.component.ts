import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'mv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
search:string="";
 @Output() searchThis: EventEmitter<string> = new EventEmitter<string>();

searchMovie()
{
  //output the search value for the list component
  this.searchThis.emit(this.search);
}
}
