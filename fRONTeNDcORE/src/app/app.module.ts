import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { HttpClientModule }    from '@angular/common/http';
import { AvoloxtestService } from './avoloxtest.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsyncvalidatorDirective } from './asyncvalidator.directive';
import { AsynvalidatorformComponent } from './asynvalidatorform/asynvalidatorform.component';
import { ModalandtableworkComponent } from './modalandtablework/modalandtablework.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveformComponent } from './newmodule/reactiveform/reactiveform.component'; // <-- import the module
import { RegisterserviceService } from './newmodule/registerservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './newmodule/login/login.component';
import { HomeComponent } from './newmodule/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestModalComponent,
    AsyncvalidatorDirective,
    AsynvalidatorformComponent,
    ModalandtableworkComponent,
    ReactiveformComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [AvoloxtestService,RegisterserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
