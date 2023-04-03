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
      title: "",
      description: ""
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
      description:this.NotesDataIn.value.description
    };

    if(notesData.title != "" && notesData.description != "")
    {
      console.log(notesData);

      this.userServices.CreateNotes(notesData).subscribe(

        (response:any) => {

          console.log(response);
          
          this._snackBar.open("Notes created", "ok", { duration: 3000 });
        },

        (error:any) => {

          this._snackBar.open("Error " + error.status + " " + error.statusText, "try again", { duration: 3000 });
        }


      );

      window.location.reload();

    }
    else 
    {
      this.firstView = true;
    }
  
    this.NotesDataIn.patchValue({
      title: "",
      description: "",
    });
    this.firstView = true;
  }
}

