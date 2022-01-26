import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  termino: string = '';
  characatersSearch: Character[] = [];

  constructor( private charactersService: CharactersService, private router: Router ) { }

  searchCharacter( e: any ) {

    e.preventDefault();

    setTimeout(() => {
      this.router.navigate(['search']);
      document.querySelectorAll('#navButton').forEach( btn => btn.classList.remove('active') );
    }, 350);

    this.charactersService.getCharacters( 1, this.termino );

    this.termino = '';

  }

}
