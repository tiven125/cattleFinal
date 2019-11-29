import { TestBed } from '@angular/core/testing';

import { GanaderoAPiService } from './ganadero-api.service';

describe('GanaderoAPiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GanaderoAPiService = TestBed.get(GanaderoAPiService);
    expect(service).toBeTruthy();
  });
});
