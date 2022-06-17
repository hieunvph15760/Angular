import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { order,typeOrderDetails } from '../types/cart';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(data:order):Observable<order>{
    return this.http.post<order>(`${environment.order}`,data);
  }

  createOrderDetails(data:typeOrderDetails):Observable<typeOrderDetails>{
    return this.http.post<typeOrderDetails>(`${environment.orderDetails}`,data);
  }

  getOrder():Observable<order[]>{
    return this.http.get<order[]>(`${environment.order}`);
  }

  getOrderDetails(_id:string):Observable<typeOrderDetails[]>{
    return this.http.get<typeOrderDetails[]>(`${environment.order}/${_id}`);
  }
}
