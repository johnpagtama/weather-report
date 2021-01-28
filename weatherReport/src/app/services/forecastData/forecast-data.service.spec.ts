import { TestBed } from '@angular/core/testing';

import { ForecastDataService } from './forecast-data.service';

describe('ForecastDataService', () => {
  let service: ForecastDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
