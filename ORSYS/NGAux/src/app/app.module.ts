import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { SecurityGuard } from './security.guard';
import { PornSecurityGuard } from './porn-security.guard';
import { DataResolve } from './data.service';
import { GithubService } from './github.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { Conditional } from '@angular/compiler';
import { GithubComponent } from './github/github.component';
import { UserComponent } from './github/user/user.component';
import { CustomDirective } from './custom.directive';
import { ConcatPipe } from './concat.pipe';
import { SortFilterPipe } from './sort-filter.pipe';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'github',
    component: GithubComponent,
    canActivate: [SecurityGuard],
    canActivateChild: [PornSecurityGuard],
    resolve: {
      test: DataResolve
    },
    children: [
      {
        path: 'user/:id/:pseudo',
        component: UserComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NotFoundComponent,
    ContactComponent,
    GithubComponent,
    UserComponent,
    CustomDirective,
    ConcatPipe,
    SortFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 600})

  ],
  providers: [GithubService, SecurityGuard, PornSecurityGuard, DataResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
