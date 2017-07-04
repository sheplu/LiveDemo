import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

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
				path: 'show',
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
