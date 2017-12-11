import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';


@Injectable()
export class CheckResolve implements Resolve<any> {

  constructor() { }

  resolve() {
    console.log('resolve');
    return "sdlkfj sdlkjflkdsajf a;lks ;lksadjg lksajdg ;lksadf jlksadjf "
  }
}
