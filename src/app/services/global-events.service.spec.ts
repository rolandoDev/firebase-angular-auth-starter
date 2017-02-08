/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalEventsService } from './global-events.service';

describe('GlobalEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalEventsService]
    });
  });

  it('should ...', inject([GlobalEventsService], (service: GlobalEventsService) => {
    expect(service).toBeTruthy();
  }));
});
