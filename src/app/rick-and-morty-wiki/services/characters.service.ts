import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import { Character, APIData } from '../interfaces/characters.interface';
import { APIDataLocations, Location } from '../interfaces/locations.interface';
import { APIDataEpisodes, Episode } from '../interfaces/episodes.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public charactersSearch: Character[] = [];
  public characters: Character[] = [];
  public locations: Location[] = [];
  public episodes: Episode[] = [];

  public pages: number[] = [];

  public searchToggle: boolean = false;

  private apiUrl: string = 'https://rickandmortyapi.com/api';

  constructor( private http: HttpClient ) { }

  getCharacters( page: number, termino: string ) {
    const url = `${ this.apiUrl }/character/?page=${ page }&name=${ termino }`;

    this.http.get<APIData>(url)
      .subscribe({
        next: characters => {
          this.charactersSearch = characters.results;
        },
        error: () => this.charactersSearch = []
      })
  }

  getAllCharacters( page: number ): void {
    const url = `${ this.apiUrl }/character?page=${ page }`;

    this.http.get<APIData>( url )
      .subscribe( characters => {

        this.characters = characters.results;

        this.pages = [];
        for (let i = 1; i <= characters.info.pages; i++) {
          this.pages.push( i );
        }

      });
  }

  getLocations( page: number ): void {
    const url = `${ this.apiUrl }/location?page=${ page }`;

    this.http.get<APIDataLocations>(url)
      .subscribe( locations => {

        this.locations = locations.results;

        this.pages = [];
        for (let i = 1; i <= locations.info.pages; i++) {
          this.pages.push( i );
        }

      });
  }

  getEpisodes( page: number ): void {
    const url = `${ this.apiUrl }/episode?page=${ page }`;

    this.http.get<APIDataEpisodes>(url)
      .subscribe( episodes => {

        this.episodes = episodes.results;

        this.pages = [];
        for (let i = 1; i <= episodes.info.pages; i++) {
          this.pages.push( i );
        }

      });
  }

}
