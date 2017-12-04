import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyHidden]'
})
export class MyHiddenDirective {

  constructor(
    private elr: ElementRef,
    private renderer: Renderer2
  ) { 
    this.renderer.setStyle(this.elr.nativeElement, 'backgroundColor', 'red');
  }
}
