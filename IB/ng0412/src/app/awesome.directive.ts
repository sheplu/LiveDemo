import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appAwesome]'
})
export class AwesomeDirective implements OnInit {

  @Input('appAwesome') myColor: string;

  constructor(
    private elr: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.elr.nativeElement, 'background', this.myColor);
  }
}
