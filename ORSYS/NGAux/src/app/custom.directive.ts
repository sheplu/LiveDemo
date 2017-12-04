import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  @Input() color: string;
  @Input() test: string;

  constructor(private elr: ElementRef, private renderer: Renderer2) { 
    console.log(this.color);
   }

  ngOnInit() {
    console.log(this.test);
    this.renderer.setStyle(this.elr.nativeElement, 'backgroundColor', this.color);
  }

}
