import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    let tmp = value;
    if(value.length > 0) {
      if(arg === 'login') {
        tmp = value.sort(this.loginSort);
      }
      else if(arg === '-login') {
        tmp = value.sort(this.aLoginSort);
      }
    }
    
    return tmp;
  };

  private loginSort(a, b) {
    let comp = 0;
    if(a.login.toLowerCase() > b.login.toLowerCase()) {
      comp = 1;
    }
    else if(a.login.toLowerCase() < b.login.toLowerCase()) {
      comp = -1;
    }
    else {
      comp = 0;
    }

    return comp;
  }

  private aLoginSort(a, b) {
    let comp = 0;
    if(a.login.toLowerCase() > b.login.toLowerCase()) {
      comp = -1;
    }
    else if(a.login.toLowerCase() < b.login.toLowerCase()) {
      comp = 1;
    }
    else {
      comp = 0;
    }

    return comp;
  }

}
