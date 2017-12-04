import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log(value);
    let tmp;
    if(arg === 'name') {
      tmp = value.sort(this.nameSort);
    }
    if(arg === 'id') {
      tmp = value.sort(this.idSort);
    }
    
    return tmp;
  }

  private nameSort(a,b) {
    let comp = 0;
    if(a.login > b.login) {
      comp = 1;
    }
    else if(a.login < b.login) {
      comp = -1;
    }
    return comp;
  }

  private idSort(a,b) {
    let comp = 0;
    if(a.id > b.id) {
      comp = 1;
    }
    else if(a.id < b.id) {
      comp = -1;
    }
    return comp;
  }

}
