import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AvoloxtestService } from '../avoloxtest.service';
import { TestModalComponent } from '../test-modal/test-modal.component';

@Component({
  selector: 'app-modalandtablework',
  templateUrl: './modalandtablework.component.html',
  styleUrls: ['./modalandtablework.component.css']
})
export class ModalandtableworkComponent implements OnInit {
  @Input() public user;
  title = 'test';
  data;
  constructor(private modalService: NgbModal, private avolox : AvoloxtestService) {}
  p: number = 1;
  ngOnInit() {

    this.user = this.avolox.getlocalstorageitem()
    console.log(this.user)
    this.data = this.avolox.getjsonobject().subscribe( res => {
      this.data = res
    })
    console.log(this.data)
    }  
open(){
  this.modalService.open(TestModalComponent, { size: 'lg' });
}

GetChildData(data){

  console.log(data)
}

}
