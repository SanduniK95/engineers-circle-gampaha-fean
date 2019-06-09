import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRequestsComponent } from './project-requests.component';

describe('ExternalProjectViewComponent', () => {
  let component: ProjectRequestsComponent;
  let fixture: ComponentFixture<ProjectRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
