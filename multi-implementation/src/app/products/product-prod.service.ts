import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductProdService implements ProductService {

  constructor() { }

  isProduction = true;

  getAllProducts(): void {
    console.log('getting data from Prod');
  }
}
