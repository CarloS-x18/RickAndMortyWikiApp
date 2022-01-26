import { Component } from '@angular/core';
import { CharactersService } from './rick-and-morty-wiki/services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private charactersService: CharactersService) {}

  title = 'rickAndMortyWiki';
}
