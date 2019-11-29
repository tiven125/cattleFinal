import { TestBed } from '@angular/core/testing';

import { PesokiloAPService } from './pesokilo-ap.service';

describe('PesokiloAPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PesokiloAPService = TestBed.get(PesokiloAPService);
    expect(service).toBeTruthy();
  });
});
