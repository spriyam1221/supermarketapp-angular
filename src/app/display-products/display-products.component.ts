import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styles: [
  ]
})
export class DisplayProductsComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  products!:any;
  getAllProducts()
  {
    const url="http://localhost:9001/products/list";
    this.http.get(url).subscribe((res)=>{
      this.products = res;
    },err=>{
    }
    )
  }

  cartItems:any= [];
  addToCart(product:any){
    // alert(id);
    this.cartItems.push(product);
    localStorage.setItem("CART_ITEMS", JSON.stringify(this.cartItems));
    this.toastrService.success("Add item to cart");
  }

}
