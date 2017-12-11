import { TestBed, async } from '@angular/core/testing';
import { AwesomeDirective } from './awesome.directive';
import { ElementRef, Renderer2 } from "@angular/core";

describe('AwesomeDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef}
      ],
    }).compileComponents();
  }));
  it('should create an instance', () => {
    const directive = new AwesomeDirective();
    expect(directive).toBeTruthy();
  });
});
