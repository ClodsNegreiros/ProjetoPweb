import { TestBed } from '@angular/core/testing';

import { SubjectfirebaseService } from './subjectfirebase.service';

describe('SubjectfirebaseService', () => {
  let service: SubjectfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
