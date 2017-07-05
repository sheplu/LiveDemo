import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myhidden]'
})
export class MyhiddenDirective {

  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

}
