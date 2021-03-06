import { TestBed } from '@angular/core/testing';

import { RedirectGuardService } from './redirect-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RedirectGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [ RouterTestingModule , HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: RedirectGuardService = TestBed.get(RedirectGuardService);
    expect(service).toBeTruthy();
  });
});
