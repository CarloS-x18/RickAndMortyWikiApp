import { Component, ElementRef, Input, ViewChild  } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {

  @Input() pages! : number[];
  @Input() route! : string;

  constructor( private charactersService: CharactersService ){}

  changePage( page: number, route: string, e: any ) {

    const pages = document.querySelectorAll('#pageElement');
    pages.forEach( li => li.classList.remove( 'pageSelect' ));

    e.target.classList.add('pageSelect');

    setTimeout(() => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }, 500);

    if( this.route === '' ) {
      return this.charactersService.getAllCharacters( page );
    }
    if( this.route === 'location' ) {
      return this.charactersService.getLocations( page );
    }
    if( this.route === 'episodes' ) {
      return this.charactersService.getEpisodes( page );
    }

  }

}
