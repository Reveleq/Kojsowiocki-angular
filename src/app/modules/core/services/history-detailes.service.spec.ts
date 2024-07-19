import { TestBed } from '@angular/core/testing';

import { HistoryDetailesService } from './history-detailes.service';

describe('HistoryDetailesService', () => {
  let service: HistoryDetailesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryDetailesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
