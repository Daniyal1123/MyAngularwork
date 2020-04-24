import { TestBed } from '@angular/core/testing';

import { AvoloxtestService } from './avoloxtest.service';

describe('AvoloxtestService', () => {
  let service: AvoloxtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvoloxtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
