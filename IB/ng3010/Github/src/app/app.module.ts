// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes, RouterStateSnapshot } from "@angular/router";

// Community

// Service
import { GithubService } from "./github.service";
import { CheckResolve } from "./check.service";
import { SecurityGuard } from "./security.guard";
import { TataGuard } from "./tata.guard";
// Component
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubComponent } from './github/github.component';
import { UserGithubComponent } from './github/user-github/user-github.component';
import { TestComponent } from "./github/test/test.component";
import { MyHiddenDirective } from './my-hidden.directive';
import { ConcatPipe } from './concat.pipe';

const appRoute: Routes = [
  {
    path: 'github',
    resolve: {
      check : CheckResolve
    },
    canActivate: [SecurityGuard, TataGuard],
    children: [
      {
        path: '',
        component: GithubComponent
      },
      {
        path: 'user/:id',
        component: UserGithubComponent
      },
      {
        path: 'test',
        component: TestComponent
      }
    ]
  },
  {
    path: 'so',
    component: TestComponent
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
    GithubComponent,
    UserGithubComponent,
    TestComponent,
    MyHiddenDirective,
    ConcatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [GithubService, CheckResolve, SecurityGuard, TataGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
