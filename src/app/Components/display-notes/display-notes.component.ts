import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit{


  @Input() childData: any;

constructor(private matDialog : MatDialog){}

ngOnInit(){

}

DialogBox(noteData:any)
{
  let dialogOpen = this.matDialog.open(UpdateNoteComponent,{

    data: noteData

  });

  dialogOpen.afterClosed().subscribe((resp:any) => {
    console.log("Dialog was closed");
    window.location.reload();
  })
}

}

