import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchievedNotesComponent } from './Components/archieved-notes/archieved-notes.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RecoverMailComponent } from './Components/recover-mail/recover-mail.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'reset-password', component:RecoverMailComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path: 'home', component:HomeComponent,

  children:[{path:'get-all-notes', component:GetAllNotesComponent},
            {path:'trash-notes', component:TrashNotesComponent},
            {path:'archive-notes', component:ArchievedNotesComponent}
          ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
