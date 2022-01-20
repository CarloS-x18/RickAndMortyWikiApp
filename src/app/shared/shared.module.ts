import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardCharacterComponent } from './card-character/card-character.component';
import { CardLocationComponent } from './card-location/card-location.component';
import { CardEpisodeComponent } from './card-episode/card-episode.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardCharacterComponent,
    CardLocationComponent,
    CardEpisodeComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardCharacterComponent,
    CardLocationComponent,
    CardEpisodeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
