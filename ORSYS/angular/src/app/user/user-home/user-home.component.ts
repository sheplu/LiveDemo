import { Component, OnInit } from '@angular/core';
import { User } from './../../classes/user'

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})



export class UserHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data : User[] = [];
  user : User = new User();

  addUser = function(value) {
  	console.log(value);
  	if(value.length > 0) {
  		console.log(this.user);
  		this.user.id = this.data.length;
  		this.data.push(this.user);
      this.user = new User();
  	}
  	
  };

}
