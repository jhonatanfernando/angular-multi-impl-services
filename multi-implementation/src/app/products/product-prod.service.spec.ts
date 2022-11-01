import { TestBed } from '@angular/core/testing';

import { ProductProdService } from './product-prod.service';

describe('ProductProdService', () => {
  let service: ProductProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
