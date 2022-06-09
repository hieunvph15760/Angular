import { TypeCart } from './../types/cart';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private toastr:ToastrService) { }

  private serviceSubject = new Subject<string>()
  
  watchService():Observable<any>{
    return this.serviceSubject.asObservable();
  }

  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  setItem(addItem:TypeCart){
    const cartItems = this.getItem();
    const existItem = cartItems.find((item: TypeCart) => item._id === addItem._id);
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      // 3.1 Nếu đã có thì cập nhật số lượng mới = số lượng cũ + thêm
      existItem.quantity += addItem.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.toastr.success("Thêm vào giỏ hàng thành công !");
    this.serviceSubject.next('');
  }
}
