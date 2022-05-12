import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private http:HttpClient, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  users!:any;

  getAllUsers()
{
  const url="http://localhost:9001/Users/list";
  this.http.get(url).subscribe((res)=>{
    this.users = res;
  },err=>{
  }
  )
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