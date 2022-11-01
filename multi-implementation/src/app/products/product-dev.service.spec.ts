import { TestBed } from '@angular/core/testing';

import { ProductDevService } from './product-dev.service';

describe('ProductDevService', () => {
  let service: ProductDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
