import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styles: [
  ]
})
export class AddProductsComponent implements OnInit {

     imageUrl!:String;
     productName!:String;
     measurement!:String;
     price!:number

  constructor(private http:HttpClient,  private toastrService: ToastrService ) { 

  }

  ngOnInit(): void {
  }
  addProducts(){

    const productObj={"imageUrl":this.imageUrl,"productName":this.productName,"measurement":this.measurement,"price":this.price};
   const url="http://localhost:9001/products/save";
   this.http.post(url,productObj).subscribe((res)=>{
     console.log(res);
     this.toastrService.success('Successfully Products Added');
   },(err)=>{
     console.log(err);
     this.toastrService.error('Please re-enter your  Products Details')
   })
}
  }


