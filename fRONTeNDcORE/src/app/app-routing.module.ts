import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AsynvalidatorformComponent } from './asynvalidatorform/asynvalidatorform.component';
import { ModalandtableworkComponent } from './modalandtablework/modalandtablework.component';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './newmodule/reactiveform/reactiveform.component';
import { LoginComponent } from './newmodule/login/login.component';
import { HomeComponent } from './newmodule/home/home.component';
import { AuthguardGuard } from './auth/authguard.guard';
const routes: Routes = [
  { path: 'async', component: AsynvalidatorformComponent },
  { path: 'modal', component: ModalandtableworkComponent },
  { path: 'Register', component: ReactiveformComponent },
  
  { path: 'Login', component: LoginComponent },
  {path:'home', component: HomeComponent,canActivate:[AuthguardGuard]}

  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
})
export class AppRoutingModule { }
