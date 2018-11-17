import { TestBed } from '@angular/core/testing';

import { EncuestadorService } from './encuestador.service';

describe('EncuestadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncuestadorService = TestBed.get(EncuestadorService);
    expect(service).toBeTruthy();
  });
});
