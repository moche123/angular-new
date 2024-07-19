import { TestBed } from '@angular/core/testing';

import { ResolutionModifiersService } from './resolution-modifiers.service';

describe('ResolutionModifiersService', () => {
  let service: ResolutionModifiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolutionModifiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
