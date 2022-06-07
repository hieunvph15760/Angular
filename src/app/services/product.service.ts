import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {

  }

  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(environment.products);
  }

  getProduct(_id:string): Observable<Product>{
      return this.http.get<Product>(`${environment.products}/${_id}`);
  }

  removeProduct(_id:string): Observable<Product>{
      return this.http.delete<Product>(`${environment.products}/${_id}`);
  }

  createProduct (data:ProductCreate): Observable<Product>{
      return this.http.post<Product>(`${environment.products}`,data);
  }

  editProduct (_id:string, data:Product): Observable<Product>{
    return this.http.put<Product>(`${environment.products}/${_id}`,data);
}
}
