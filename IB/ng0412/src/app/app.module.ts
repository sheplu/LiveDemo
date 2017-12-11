import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GithubService } from './github.service';
import { CheckResolve } from './check.service';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubComponent } from './contact/github/github.component';
import { AwesomeDirective } from './awesome.directive';
import { ConcatPipe } from './concat.pipe';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'contact', canActivateChild: [AuthGuard],
      children: [
        { 
          path: 'github/:id', 
          component: GithubComponent, 
          canActivate: [AuthGuard],
          resolve: {
            resolvData: CheckResolve
          }
        }, 
        { path: '', component: ContactComponent }
      ] 
  },
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    NotFoundComponent,
    GithubComponent,
    AwesomeDirective,
    ConcatPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [ GithubService, CheckResolve, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
