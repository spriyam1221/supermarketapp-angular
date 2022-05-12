import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  name!:String;
  email!:String;
  password!:String;
  mobileNumber!:number

  constructor(private http:HttpClient, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }
  register(){

  //   const userObj={
  //     "name":"jeevapriya",
  //     "email":"jp@gmail.com",
  //     "password":"Priya!12345",
  //     "mobileNumber":8973279683

  //  };

   const userObj={"name":this.name,"email":this.email,"password":this.password,"mobileNumber":this.mobileNumber};
   const url="http://localhost:9001/Users/save";
   this.http.post(url,userObj).subscribe((res)=>{
     console.log(res);
     this.toastrService.success('successfully Registered');
   },(err)=>{
     console.log(err);
     this.toastrService.error('Please re-enter your Details')
   })
}
}

