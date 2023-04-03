import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  noteTitle : any;
  noteDescription : any;
  noteId : any;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private matDialogRef: MatDialogRef<UpdateNoteComponent>, private userServices : UserService){}

  ngOnInit(): void {

    this.noteTitle = this.data.title;
    this.noteDescription = this.data.description;
    this.noteId = this.data.id;
      
  }


  DataCap()
  {

    if(this.data.title != this.noteTitle || this.data.description != this.noteDescription)
    {
      let updatedData = {

        title: this.noteTitle,
        description: this.noteDescription,
        noteId: this.noteId
      }
      console.log(updatedData);

      this.userServices.UpdateNotes(updatedData, this.noteId).subscribe((resp:any) => {console.log("Note updated", resp);})   
    }

    this.matDialogRef.close();
    
  }

}
