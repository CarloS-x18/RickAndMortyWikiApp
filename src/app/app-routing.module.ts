import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AllComponent } from './rick-and-morty-wiki/pages/all/all.component';
import { ByLocationComponent } from './rick-and-morty-wiki/pages/by-location/by-location.component';
import { ByEpisodeComponent } from './rick-and-morty-wiki/pages/by-episode/by-episode.component';
import { ShowCharecterComponent } from './rick-and-morty-wiki/pages/show-charecter/show-charecter.component';
import { ResultsComponent } from './rick-and-morty-wiki/pages/results/results.component';

const routes: Routes = [
  {
    path: '',
    component: AllComponent,
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: ResultsComponent
  },
  {
    path: 'locations',
    component: ByLocationComponent
  },
  {
    path: 'episodes',
    component: ByEpisodeComponent
  },
  {
    path: 'character/:id',
    component: ShowCharecterComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
