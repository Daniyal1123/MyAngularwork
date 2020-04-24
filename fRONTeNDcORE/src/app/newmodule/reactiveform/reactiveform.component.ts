import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule } from '@angular/forms';
import { RegisterserviceService } from '../registerservice.service';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
body;
  constructor(private fb : FormBuilder, private registerservice : RegisterserviceService,private toastr: ToastrService) { }
formmodule = this.fb.group({
username : ['' , Validators.required ],
FullName : ['', Validators.required],
email : ['' , [Validators.required,Validators.email]],
passwords : this.fb.group({
  password : ['',[Validators.required,Validators.minLength(4)]],
  confirmpassword : ['', Validators.required]
}, {validator: this.comparepass})
});
comparepass(fb: FormGroup ){
let confirmpasswrdctrl = fb.get('confirmpassword');
if ( confirmpasswrdctrl.errors == null || 'passwordmissmatch' in confirmpasswrdctrl.errors ){
if ( fb.get('password').value != confirmpasswrdctrl.value)

  confirmpasswrdctrl.setErrors({passwordmissmatch: true});
else
  confirmpasswrdctrl.setErrors(null)}

}


  ngOnInit(): void {
    this.formmodule.reset();
  }

  

register(){
  var body = { 
    UserName: this.formmodule.value.username,
    Email: this.formmodule.value.email,
    Password: this.formmodule.value.passwords.password,
    FullName: this.formmodule.value.FullName

  }

  this.registerservice.registerreactiveform(body).subscribe((res:any) =>{
if(res.succeeded){
  this.toastr.success('Hello world!', 'Toastr fun!')
  this.formmodule.reset();
}
else{
  res.errors.forEach(element => {
    switch(element.code){
      case 'DuplicateUserName':
        //error
        this.toastr.error('username already exist', 'Regidtration Failed')
        break;
        default:
          this.toastr.error('Failed', 'Regidtration Failed')
          //Reg Failed
          break;
    }
  });
}
  },
  err =>{
    console.log(err)
  }
  ) 


}


}
