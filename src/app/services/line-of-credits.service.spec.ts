import { TestBed } from '@angular/core/testing';

import { LineOfCreditsService } from './line-of-credits.service';

describe('LineOfCreditsService', () => {
  let service: LineOfCreditsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineOfCreditsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
