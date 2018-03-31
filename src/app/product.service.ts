import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Product } from './product';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Company } from './company';
import { COMPANY } from './moch-heroes';
import { Group } from './group';
import { GROUP } from './moch-heroes';
@Injectable()
export class ProductService {

 constructor(private http: Http) {}
 
 private headers = new Headers({ 'Content-Type': 'application/json' });
 private productssUrl = 'http://localhost:3000/users.json';

 getProducts(): Observable<Product[]> {
    return this.http.get(this.productssUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }



  getCompany(): Company[] {
    return COMPANY;
  }

  getGroup(): Group[] {
    return GROUP;
  }


  //   getProduct(id: number): Promise<Product> {
  //   const url = `${this.productssUrl}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json().data as Product)
  //     .catch(this.handleError);
  // }


  // createProduct(product: Product): Promise<Product> {
  //   return this.http
  //     .post(this.productssUrl, JSON.stringify(product), { headers: this.headers })
  //     .toPromise()
  //     .then(res => res.json().data as Product)
  //     .catch(this.handleError);
  // }

  // updateProduct(product: Product): Promise<Product> {
  //   const url = `${this.productssUrl}/${product.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(product), { headers: this.headers })
  //     .toPromise()
  //     .then(() => product)
  //     .catch(this.handleError);
  // }

  deleteProduct(product: Product): Promise<void> {
    const url = `${this.productssUrl}/${product.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
          return body;
      }

      private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
          }






}


