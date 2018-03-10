import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

 constructor(private http: Http) {}
 
 private headers = new Headers({ 'Content-Type': 'application/json' });
 private productssUrl = 'localhost:3000/products';

 getProducts(): Promise<Product[]> {
    return this.http.get(this.productssUrl)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }


    getProduct(id: number): Promise<Product> {
    const url = `${this.productssUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Bike)
      .catch(this.handleError);
  }


  createProduct(product: Product): Promise<Product> {
    return this.http
      .post(this.productssUrl, JSON.stringify(product), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Product)
      .catch(this.handleError);
  }

  updateProduct(product: Product): Promise<Product> {
    const url = `${this.productssUrl}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), { headers: this.headers })
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  deleteProduct(product: Product): Promise<void> {
    const url = `${this.productssUrl}/${product.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }






}


