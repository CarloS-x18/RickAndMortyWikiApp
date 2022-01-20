import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-by-location',
  templateUrl: './by-location.component.html',
  styleUrls: ['./by-location.component.scss']
})
export class ByLocationComponent implements OnInit {

  get locations() {
    return this.charactersService.locations;
  }

  get pagesLocations() {
    return this.charactersService.pages;
  }

  constructor( private charactersService: CharactersService ) {}

  ngOnInit(): void {
    this.charactersService.getLocations( 1 );
  }

}
