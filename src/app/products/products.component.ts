import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { HEROES } from '../moch-heroes';
import { Company } from '../company';
import { Group } from '../group';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: Product[]
  companies: Company[]
  groups: Group[]
  allCompanies: Company[]
  selectedCompany: Company;
  selectedGroup: Group;
  constructor(private productService: ProductService) { 


  }

  ngOnInit() {
    this.getAllProducts();
    this.getCompanies();
    this.getGroups();
  }



     //Fetch all articles
     getAllProducts() {
      this.productService.getProducts()
          .subscribe(
              data => this.allProducts = data);   
 }

 getCompanies(): void {
  this.allCompanies = this.productService.getCompany();
  this.companies = this.allCompanies;
}

getGroups(): void {
  this.groups = this.productService.getGroup();
}

onOptionSelected(event){
  console.log(event); //option value will be sent as event
 }

 onGroupSelected(event){
  alert("hi")
  debugger;
  this.companies =  this.allCompanies.filter((item)=> item.group_id == event);
  console.log(event); //option value will be sent as event
 }

}
