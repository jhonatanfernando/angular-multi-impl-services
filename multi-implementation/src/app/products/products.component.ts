import { Component, Inject, OnInit } from '@angular/core';
import { ProductService, productServiceToken } from './product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private productService: ProductService;
  constructor(@Inject(productServiceToken) private productServices: ProductService[]) { 

      this.productService = this.getService();
  }

  ngOnInit(): void {
    this.productService.getAllProducts();
  }

  getService(): ProductService {
    return this.productServices.find(p=> p.isProduction == environment.production)!;
  } 

}
