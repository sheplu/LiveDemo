import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private id: String;
  constructor(private route: ActivatedRoute,
    private user: UserService) { 

  }

  ngOnInit() {
    this.route.params.subscribe( (params)  => {
      this.user.getUserGithub(params.id).subscribe( (data) => {
        console.log(data);
        this.id = data.id;
      })
    }); 

    console.log(this.user.getUser());
  }

  private clicked() {
    console.log('clicked!');
  }

}
