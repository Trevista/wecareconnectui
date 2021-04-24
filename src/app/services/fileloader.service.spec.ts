import { TestBed } from '@angular/core/testing';

import { FileloaderService } from './fileloader.service';

describe('FileloaderService', () => {
  let service: FileloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
