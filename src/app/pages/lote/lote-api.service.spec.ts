import { TestBed } from '@angular/core/testing';

import { LoteAPiService } from './lote-api.service';

describe('LoteAPiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoteAPiService = TestBed.get(LoteAPiService);
    expect(service).toBeTruthy();
  });
});
