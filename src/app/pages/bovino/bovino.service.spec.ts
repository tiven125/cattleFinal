import { TestBed } from '@angular/core/testing';

import { BovinoService } from './bovino.service';

describe('BovinoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BovinoService = TestBed.get(BovinoService);
    expect(service).toBeTruthy();
  });
});
