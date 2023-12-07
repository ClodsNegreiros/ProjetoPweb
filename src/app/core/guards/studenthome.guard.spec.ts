import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { studenthomeGuard } from './studenthome.guard';

describe('studenthomeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => studenthomeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
