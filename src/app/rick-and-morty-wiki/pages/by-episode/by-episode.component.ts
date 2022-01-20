import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-by-episode',
  templateUrl: './by-episode.component.html',
  styleUrls: ['./by-episode.component.scss']
})
export class ByEpisodeComponent implements OnInit {

  get episodes() {
    return this.charactersService.episodes;
  }

  get pagesEpisodes() {
    return this.charactersService.pages;
  }

  constructor( private charactersService: CharactersService ) { }

  ngOnInit(): void {
    this.charactersService.getEpisodes( 1 );
  }

  showName( name: string ): any {
    if( name.split("").length > 16 ) {
      return name.slice( 0,16 ) + '...';
    } else {
      return name;
    }
  }

}
