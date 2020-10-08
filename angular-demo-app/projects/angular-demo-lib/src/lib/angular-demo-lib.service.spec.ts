import { TestBed } from '@angular/core/testing';

import { AngularDemoLibService } from './angular-demo-lib.service';

describe('AngularDemoLibService', () => {
  let service: AngularDemoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularDemoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
