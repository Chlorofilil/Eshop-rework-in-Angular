import { TestBed } from '@angular/core/testing';

import { LoginvisibilityService } from './loginvisibility.service';

describe('LoginvisibilityService', () => {
  let service: LoginvisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginvisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
