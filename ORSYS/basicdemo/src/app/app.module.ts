import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './not-found.component';
import { PlanetComponent } from './planet/planet.component';
import { PlanetShowComponent } from './planet/planet-show/planet-show.component';
import { PlanetEditComponent } from './planet/planet-edit/planet-edit.component';
import { PlanetDeleteComponent } from './planet/planet-delete/planet-delete.component';
import { PlanetAddComponent } from './planet/planet-add/planet-add.component';
import { GithubComponent } from './github/github.component';
import { UserSearchComponent } from './github/user-search/user-search.component';
import { GistCreateComponent } from './github/gist-create/gist-create.component';
import { HomeComponent } from './home/home.component';

import { UserGithubService } from './github/user-github.service';
import { CustomPipe } from './github/custom.pipe';
import { MyhiddenDirective } from './github/myhidden.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PlanetShowComponent,
    PlanetEditComponent,
    PlanetDeleteComponent,
    PlanetAddComponent,
    GithubComponent,
    UserSearchComponent,
    GistCreateComponent,
    PageNotFoundComponent,
    HomeComponent,
    CustomPipe,
    MyhiddenDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ UserGithubService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
