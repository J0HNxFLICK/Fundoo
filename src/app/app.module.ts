import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { RecoverMailComponent } from './Components/recover-mail/recover-mail.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { NotesIconsComponent } from './Components/notes-icons/notes-icons.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import {MatMenuModule} from '@angular/material/menu';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { ArchievedNotesComponent } from './Components/archieved-notes/archieved-notes.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    RecoverMailComponent,
    HomeComponent,
    CreateNotesComponent,
    DisplayNotesComponent,
    NotesIconsComponent,
    GetAllNotesComponent,
    UpdateNoteComponent,
    TrashNotesComponent,
    ArchievedNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
