import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit{
  firstView : boolean=true;
  NotesDataIn!:FormGroup;

  constructor(private formBuilder: FormBuilder , private userServices: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit()
  {
    this.NotesDataIn = this.formBuilder.group({
      title:"",
      content:""
    })
  }

  SecondView()
  {
    this.firstView = false;
  }

  Close()
  {
    let notesData={
      title:this.NotesDataIn.value.title,
      content:this.NotesDataIn.value.content
    };

    if(notesData.title != "" || notesData.content != "")
    {
      console.log(notesData);

      this.userServices.CreateNotes(notesData).subscribe(

        (response:any) => {

          this._snackBar.open("Notes created", "ok", { duration: 3000 });
        },

        (error:any) => {

          this._snackBar.open("Error " + error.status + " " + error.statusText, "try again", { duration: 3000 });
        }


      );

    }
    else 
    {
      this.firstView = true;
    }
  
    this.NotesDataIn.patchValue({
      title: "",
      content: "",
    });
    this.firstView = true;
  }
}

