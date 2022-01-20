import { Component, Input } from '@angular/core';

import { Character } from '../../rick-and-morty-wiki/interfaces/characters.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent {

  @Input() character ! : Character;

  constructor(){}

  showName( name: string ): any {
    if( name.split("").length > 16 ) {
      return name.slice( 0,16 ) + '...';
    } else {
      return name;
    }
  }

}
