import { TypeCart } from './../../../types/cart';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/Product';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product
  getAllProducts: Product[]
  quantity:number
  constructor(
    private ProductService:ProductService,
    private ActivatedRoute:ActivatedRoute,
    private toastr:ToastrService,
    private localstorage: LocalStorageService
  ) {
    this.product = {
      _id:'',
      name:'',
      price:0,
      image:'',
      sale_price:0,
      description:'',
      status:0,
      category:''
    }
    this.quantity = 1
    this.getAllProducts = []
   }

  ngOnInit(): void {
    // Chi tiết sản phẩm
    const idUrl = this.ActivatedRoute.snapshot.params['_id'];
    this.ProductService.getProduct(idUrl).subscribe(data =>{
      this.product = data;
    })

    // Tất cả sản phẩm
    this.ProductService.getProducts().subscribe(data =>{
      // Tìm kiếm sản phẩm trùng category
      this.getAllProducts = data.filter(item => item.category === this.product.category)

      // Bỏ qua sản phẩm đang hiển thị chi tiết
      this.getAllProducts = this.getAllProducts.filter(item => item._id !== this.product._id)
    })
  }

  increasing(){
      this.quantity ++;
  }

  reduce(){
    this.quantity --;
    if(this.quantity < 1){
        this.quantity = 1;
    }
  }

  addToCart(){
    const newProduct = {
      ...this.product,
      quantity: this.quantity
    }
    // const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    // const existItem = cartItems.find((item: TypeCart) => item._id === newProduct._id);
    // if (!existItem) {
    //   cartItems.push(newProduct);
    // } else {
    //   // 3.1 Nếu đã có thì cập nhật số lượng mới = số lượng cũ + thêm
    //   existItem.quantity += newProduct.quantity;
    // }
    // localStorage.setItem('cart', JSON.stringify(cartItems));
    // this.toastr.success("Thêm vào giỏ hàng thành công !");
    this.localstorage.setItem(newProduct);
    this.quantity = 1;
  }

}
