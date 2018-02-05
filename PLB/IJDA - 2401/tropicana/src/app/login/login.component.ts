import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: String;
  input: String;

  constructor(private route: ActivatedRoute,
  private user: UserService) { 
  }

  ngOnInit() {
    this.route.params.subscribe( (params)  => {
      this.user.getUserGithub(params.id).subscribe( (data) => {
        console.log(data);
        this.id = 'Jean';
      });
    }); 
    console.log(this.user.getUser());
  }

  clicked() {
    console.log('clicked!');
    this.fetchData();
  }

  private fetchData() {
    this.user.getUserGithub(this.input).subscribe( (data) => {
      console.log(data);
      this.id = 'jean';
    });
  }
}
