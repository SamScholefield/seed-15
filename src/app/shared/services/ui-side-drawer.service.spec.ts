import { TestBed } from '@angular/core/testing';

import { UiSideDrawerService } from './ui-side-drawer.service';

describe('UiSideDrawerService', () => {
  let service: UiSideDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiSideDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
