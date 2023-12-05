import { TestBed } from '@angular/core/testing';

import { NotasfirebaseService } from './notasfirebase.service';

describe('NotasfirebaseService', () => {
  let service: NotasfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
