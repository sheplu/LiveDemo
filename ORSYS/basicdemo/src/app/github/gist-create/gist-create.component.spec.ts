import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistCreateComponent } from './gist-create.component';

describe('GistCreateComponent', () => {
  let component: GistCreateComponent;
  let fixture: ComponentFixture<GistCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
