import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCalenderComponent } from './project-calender.component';

describe('ProjectCalenderComponent', () => {
  let component: ProjectCalenderComponent;
  let fixture: ComponentFixture<ProjectCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
