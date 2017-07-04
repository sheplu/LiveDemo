import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { UserGithubService } from './services/user-github.service'

const routes : Routes = [
	{
		path: 'user',
		component: UserComponent,
		children: [
			{
				path: 'display',
				component: UserHomeComponent
			},
			{
				path: 'show/:id',
				component: UserShowComponent
			},
			{
				path: 'edit',
				component: UserEditComponent
			},
			{
				path: 'delete',
				component: UserDeleteComponent
			}
		]
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/user'
	}
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserHomeComponent,
    UserShowComponent,
    UserDeleteComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [ UserGithubService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
