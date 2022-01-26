import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AllComponent } from './pages/all/all.component';
import { ByLocationComponent } from './pages/by-location/by-location.component';
import { ByEpisodeComponent } from './pages/by-episode/by-episode.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { PagerComponent } from './components/pager/pager.component';
import { ShowCharecterComponent } from './pages/show-charecter/show-charecter.component';
import { NavSearchComponent } from './components/nav-search/nav-search.component';
import { SharedModule } from '../shared/shared.module';
import { ResultsComponent } from './pages/results/results.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AllComponent,
    ByLocationComponent,
    ByEpisodeComponent,
    SearchInputComponent,
    NavSearchComponent,
    PagerComponent,
    ShowCharecterComponent,
    ResultsComponent
  ],
  exports: [
    AllComponent,
    ByLocationComponent,
    ByEpisodeComponent,
    NavSearchComponent,
    SearchInputComponent,
    PagerComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class RickAndMortyWikiModule { }
