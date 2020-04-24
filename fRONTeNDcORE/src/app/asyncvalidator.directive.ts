import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { AvoloxtestService } from './avoloxtest.service';
import { map } from 'rxjs/internal/operators';

@Directive({
  selector: '[appAsyncvalidator]',
  providers: [{ provide : NG_ASYNC_VALIDATORS, useExisting: AsyncvalidatorDirective, multi: true}]
})
export class AsyncvalidatorDirective implements AsyncValidator{

  constructor(private acolox : AvoloxtestService) { }
validate(c:AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null >{
return this.acolox.getuserobject(c.value).pipe(
map(users => {
  return users && users.length > 0 ? {'appAsyncvalidator' : true}: null;
  
})

);
}
}
