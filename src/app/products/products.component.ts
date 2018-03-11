import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: Product[]
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }



     //Fetch all articles
     getAllProducts() {
      this.productService.getProducts()
          .subscribe(
              data => this.allProducts = data);   
 }

}
