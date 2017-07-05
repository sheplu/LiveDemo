import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { HomeComponent } from './home/home.component';
import { PlanetComponent } from './planet/planet.component';
import { PlanetShowComponent } from './planet/planet-show/planet-show.component';
import { PlanetEditComponent } from './planet/planet-edit/planet-edit.component';
import { PlanetDeleteComponent } from './planet/planet-delete/planet-delete.component';
import { PlanetAddComponent } from './planet/planet-add/planet-add.component';
import { GithubComponent } from './github/github.component';
import { UserSearchComponent } from './github/user-search/user-search.component';
import { GistCreateComponent } from './github/gist-create/gist-create.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'planet',
    component: PlanetComponent,
    children: [
      { path: 'show/:id', component: PlanetShowComponent },
      { path: 'edit/:id', component: PlanetEditComponent },
      { path: 'delete/:id', component: PlanetDeleteComponent },
      { path: 'add', component: PlanetAddComponent },
    ]
  },
  {
    path: 'github',
    component: GithubComponent,
    children: [
      { path: 'search', component: UserSearchComponent },
      { path: 'gist', component: GistCreateComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
