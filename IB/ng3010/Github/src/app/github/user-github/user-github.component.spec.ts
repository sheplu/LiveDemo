import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGithubComponent } from './user-github.component';

describe('UserGithubComponent', () => {
  let component: UserGithubComponent;
  let fixture: ComponentFixture<UserGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
