import { Component } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  get characters() {
    return this.characterService.charactersSearch;
  }

  constructor( private characterService: CharactersService ) {}

}
