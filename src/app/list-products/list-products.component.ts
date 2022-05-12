import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styles: [
  ]
})
export class ListProductsComponent implements OnInit {

  constructor(private http:HttpClient, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  products!:any;
  getAllProducts(){

  
  const url="http://localhost:9001/products/list";
  this.http.get(url).subscribe((res)=>{
    this.products = res;
  },err=>{
  }
  )
}
deleteProduct(id:any){
  let cfm = confirm("Do you want to delete ?");
  if(cfm){
    const url="http://localhost:9001/products/" + id;
    this.http.delete(url).subscribe((res)=>{
      console.log(res);
      this.toastrService.success('successfully deleted');
     // alert("Successfully Deleted");
      //refresh
      this.getAllProducts();
    },err=>{
     this.toastrService.error('invalid credentails')
    }
    )
  }
}
}
