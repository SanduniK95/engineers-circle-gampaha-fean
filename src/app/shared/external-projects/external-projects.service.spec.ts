import { TestBed, inject } from '@angular/core/testing';

import { ExternalProjectsService } from './external-projects.service';

describe('ExternalProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalProjectsService]
    });
  });

  it('should be created', inject([ExternalProjectsService], (service: ExternalProjectsService) => {
    expect(service).toBeTruthy();
  }));
});
