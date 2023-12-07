import { TestBed } from '@angular/core/testing';

import { StudentfirebaseService } from './studentfirebase.service';

describe('StudentfirebaseService', () => {
  let service: StudentfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
