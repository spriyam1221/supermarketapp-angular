import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    throw new Error('Method not implemented.');
  }
 
  deleteProduct(id:any){
    let cfm = confirm("Do you want to delete ?");
    if(cfm){
      const url="http://localhost:9001/Users" + id;
      this.http.delete(url).subscribe((res)=>{
        console.log(res);
        this.toastrService.success('successfully deleted');
       // alert("Successfully Deleted");
        //refresh
        this.getAllUsers();
      },err=>{
       this.toastrService.error('invalid credentails')
      }
      )
    }
  }
}
