import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { 
    'path': 'login', 'component': LoginComponent, 
    children: [
      { 'path': 'user/:id/:bob', 'component': UserComponent }
    ]
  },
  { 'path': '', 'redirectTo': 'login', 'pathMatch': 'full' },
  { 'path': '**', 'component': NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
