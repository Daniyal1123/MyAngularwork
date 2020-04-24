import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterserviceService } from '../registerservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formmodel= {
  UserName: '',
  Password: ''
}
 
  constructor(private regservice : RegisterserviceService, private routes: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.routes.navigateByUrl('/home');
    }
  }
  onsubmit(form:NgForm)
{

  this.regservice.login(form.value).subscribe((res:any)=>{
    localStorage.setItem('token',res.token);
    console.log(res)
    
    this.toaster.success('Login Sucessfully' ,'Success')
  this.routes.navigateByUrl('/home');
  }, err => {
    if(err.status == 400){
      this.toaster.error('Failed', 'INCORRECT ID OR PASSWORD')

    }
    else{
      console.log(err)
    }
  })
}
}
  