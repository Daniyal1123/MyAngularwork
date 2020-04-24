import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {
 
  constructor(private http: HttpClient) { }
readonly baseUrl = "https://localhost:44300/api";


registerreactiveform(body){

return this.http.post(this.baseUrl +'/ApplicationUser/Register',body)
}
login(formdata)
   {
    return this.http.post(this.baseUrl +'/ApplicationUser/login',formdata)

   }

   getuser(){
     var tokenheader = new HttpHeaders({'authorization':'Bearer '+ localStorage.getItem('token')});
     console.log(tokenheader)
     return this.http.get(this.baseUrl+'/Userdetail',{headers : tokenheader});
   }
}
