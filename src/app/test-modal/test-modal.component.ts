import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm   } from '@angular/forms'
import { DatePipe } from '@angular/common';
import { AvoloxtestService } from '../avoloxtest.service';
// import { from } from 'rxjs';
@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  user: any = { id: '', name: ''}
  constructor(public activeModal: NgbActiveModal , private service : AvoloxtestService) { }
form: NgForm
  ngOnInit(): void {
  }

  passBack(form: NgForm) {
    debugger
this.service.setlocalstorage(form)
this.service.getlocalstorageitem()
    // this.passEntry.emit(this.user);
    console.log(form.value)
    }
}
