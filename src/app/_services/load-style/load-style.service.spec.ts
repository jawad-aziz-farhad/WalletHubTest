import { TestBed } from '@angular/core/testing';

import { LoadStyleService } from './load-style.service';

describe('LoadStyleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadStyleService = TestBed.get(LoadStyleService);
    expect(service).toBeTruthy();
  });
});
