import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductProdService } from './products/product-prod.service';
import { productServiceToken } from './products/product.service';
import { ProductDevService } from './products/product-dev.service';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: productServiceToken,
      useClass: ProductDevService,
      multi: true,
    },
    {
      provide: productServiceToken,
      useClass: ProductProdService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
