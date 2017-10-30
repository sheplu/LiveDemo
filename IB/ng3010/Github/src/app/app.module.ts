// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

// Community

// Service
import { GithubService } from "./github.service";

// Component
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubComponent } from './github/github.component';


const appRoute: Routes = [
  {
    path: '',
    component: GithubComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
