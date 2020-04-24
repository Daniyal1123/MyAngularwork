import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TestModalComponent} from './test-modal/test-modal.component';
import {Sort} from '@angular/material/sort';

import {AvoloxtestService} from './avoloxtest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NgbModal, private avolox : AvoloxtestService) {}
 

}
