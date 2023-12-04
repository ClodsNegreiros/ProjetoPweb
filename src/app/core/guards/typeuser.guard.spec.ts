import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { TeacherHomeGuard } from './typeuser.guard';

describe('typeuserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() =>TeacherHomeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
