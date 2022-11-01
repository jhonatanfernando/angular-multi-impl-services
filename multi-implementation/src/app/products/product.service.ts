import { Injectable, InjectionToken } from '@angular/core';

export const productServiceToken = new InjectionToken<ProductService>("ProductService");

export interface ProductService {

  isProduction: boolean;

  getAllProducts(): void;

}
