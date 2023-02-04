import { TestBed } from '@angular/core/testing';

import { CartsoService } from './cartso.service';

describe('CartsoService', () => {
  let service: CartsoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartsoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
