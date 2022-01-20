import { Component, Input } from '@angular/core';
import { Location } from '../../rick-and-morty-wiki/interfaces/locations.interface';

@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.scss']
})
export class CardLocationComponent {

  @Input() location ! : Location;

  dimensionLocation( term: string ) {
    if( term === 'unknown' ) {
      return '--------';
    } else {
      return term;
    }
  }

  showName( name: string ): any {
    if( name.split("").length > 16 ) {
      return name.slice( 0,16 ) + '...';
    } else {
      return name;
    }
  }

}
