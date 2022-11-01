import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDevService implements ProductService {

  constructor() { }
  isProduction = false;

  getAllProducts(): void {
    console.log('getting data from Dev');
  }
}
