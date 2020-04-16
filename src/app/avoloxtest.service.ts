import { Injectable } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/internal/operators';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AvoloxtestService {
  // formData : User =  {
  //   name : null,
 
  //   age: null,
   
  // };
  private url  = "https://jsonplaceholder.typicode.com/users"
  constructor(private http : HttpClient ) { }

getjsonobject(): Observable<any>{
  return this.http.get<any>("https://jsonplaceholder.typicode.com/albums")

  //https://jsonplaceholder.typicode.com/albums
  // return this.http.get<any>("https://api.binance.com/api/v1/ticker/price?symbol=LTCBTC")
  // .pipe(map(users => users.filter(users => users.symbol === Symbol)))
} 
getuserobject(uname){
  return this.http.get<any[]>(this.url+'?username='+uname);

 
} 


setlocalstorage(formData)
{
    localStorage.setItem('key', JSON.stringify(formData.value));
  console.log(formData.value)
    
}
getlocalstorageitem(){
   return JSON.parse(localStorage.getItem('key'));


}

}
