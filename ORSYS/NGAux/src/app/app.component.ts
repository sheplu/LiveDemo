import { Component } from '@angular/core';
import { GithubService } from './github.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private github : GithubService) {

  }

  color = 'blue';
  users;
  title : String = 'Auxia';
  user : any = {
    'pseudo': ''
  }

  
  searchUser(): void {
    this.github.getUsers(this.user.pseudo).subscribe( (data) => {
      this.user = data;
      this.users = data;
      console.log(data);
      //this.github.getUserFollowers(data).subscribe( (value) => {
        //console.log(value);
      //});
    });    
  }
}
