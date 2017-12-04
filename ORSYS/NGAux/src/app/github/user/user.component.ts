import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Action } from 'rxjs/scheduler/Action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('test');
    this.route.params.subscribe( (params) => {
      console.log(params);
    })
  }

}
