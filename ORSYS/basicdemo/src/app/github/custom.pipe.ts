import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return value
    }
    value = value + 1;
    return value;
  }

}
