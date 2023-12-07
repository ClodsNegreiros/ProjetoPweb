import { TestBed } from '@angular/core/testing';

import { TeacherfirebaseService } from './teacherfirebase.service';

describe('TeacherfirebaseService', () => {
  let service: TeacherfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
