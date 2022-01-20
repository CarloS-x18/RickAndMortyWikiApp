import { Component } from '@angular/core';

import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent {

  constructor( private charactersService: CharactersService ) {}

  getCharacters() {
    return this.charactersService.getAllCharacters(1);
  }

}
