import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userDetail;
  constructor(private router: Router, private service:RegisterserviceService) { }

  ngOnInit(){
    this.getuserdetail()
  }
getuserdetail(){
  console.log('check')
  this.service.getuser().subscribe(res => {
    
    this.userDetail = res
  },err =>{
    console.log(err + "checking")
  },)
}
 
  onlogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);
  }
}
