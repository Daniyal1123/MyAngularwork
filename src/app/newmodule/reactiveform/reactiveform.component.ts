import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
formmodule = this.fb.group({
username : ['' , Validators.required ],
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
  }
 
register(){
  console.log(this.formmodule.value)

}


}
