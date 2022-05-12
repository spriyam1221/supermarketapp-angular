import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styles: [
  ]
})
export class UpdateProductsComponent implements OnInit {

 
  product:any;
  id:any;

  constructor(private http:HttpClient, private toastrService: ToastrService, private route:ActivatedRoute) {
    this.id = this.route.snapshot.params["id"];

   }
    
  ngOnInit(): void {
    this.getProduct();

  }

  getProduct(){
    const url = "http://localhost:9001/products/" + this.id;
    this.http.get(url).subscribe(res=>{
      this.product = res;
    })
  }

  updateProducts(){
    //const productObj={"productId":this.productId,"productName":this.productName,"measurement":this.measurement,"price":this.price};
    console.log(this.product);

    const url = "http://localhost:9001/products/" + this.id;
    this.http.put(url,this.product).subscribe(res=>{
      alert("Updated");
    })
  }

}
