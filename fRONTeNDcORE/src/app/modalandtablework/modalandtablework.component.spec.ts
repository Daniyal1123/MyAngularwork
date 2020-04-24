import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalandtableworkComponent } from './modalandtablework.component';

describe('ModalandtableworkComponent', () => {
  let component: ModalandtableworkComponent;
  let fixture: ComponentFixture<ModalandtableworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalandtableworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalandtableworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
