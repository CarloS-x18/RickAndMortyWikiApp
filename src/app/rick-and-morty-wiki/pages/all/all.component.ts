import { Component } from '@angular/core';

import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {

  get characters() {
    return this.charactersService.characters;
  }

  get pagesCharacters() {
    return this.charactersService.pages;
  }

  constructor( private charactersService: CharactersService ) {}

  ngOnInit(): void {
    this.charactersService.getAllCharacters( 1 );
  }

}
