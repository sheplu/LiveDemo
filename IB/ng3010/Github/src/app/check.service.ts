import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";

@Injectable()
export class CheckResolve implements Resolve<any>{

  constructor() { }

  resolve() {
    console.log('resolve');
  }

}
