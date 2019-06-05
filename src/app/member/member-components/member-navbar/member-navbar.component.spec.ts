import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberNavbarComponent } from './member-navbar.component';

describe('MemberNavbarComponent', () => {
  let component: MemberNavbarComponent;
  let fixture: ComponentFixture<MemberNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
