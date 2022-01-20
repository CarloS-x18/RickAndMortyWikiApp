import { Component, Input } from '@angular/core';

import { Episode } from '../../rick-and-morty-wiki/interfaces/episodes.interface';

@Component({
  selector: 'app-card-episode',
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.scss']
})
export class CardEpisodeComponent {

  @Input() episode ! : Episode;
  @Input() index ! : number;

  constructor() { }

}
