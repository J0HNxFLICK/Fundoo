import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RecoverMailComponent } from './Components/recover-mail/recover-mail.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'reset-password', component:RecoverMailComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path: 'home', component:HomeComponent,

  children:[{path:'create-notes', component:CreateNotesComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
