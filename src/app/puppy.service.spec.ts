import { TestBed } from '@angular/core/testing';

import { PuppyService } from './puppy.service';

describe('PuppyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuppyService = TestBed.get(PuppyService);
    expect(service).toBeTruthy();
  });
});
