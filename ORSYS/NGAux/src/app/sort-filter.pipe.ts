import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortfilter'
})
export class SortFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    let tmp;
    if(arg === 'name') {
      tmp = value.sort(this.nameSort);
    }
    else {
      tmp = value;
    }

    return tmp;
  }

  private nameSort(a,b) {
    let comp = 0;
    if(a.name > b.name) {
      comp = 1;
    }
    else if(a.name < b.name) {
      comp = -1;
    }

    return comp;
  }

}
