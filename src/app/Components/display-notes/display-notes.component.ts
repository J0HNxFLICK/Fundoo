import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { DataShareService } from 'src/app/services/Data-Share/data-share.service';



@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit{


  @Input() childData: any;

  searchInput : any;

constructor(private matDialog : MatDialog, private dataShare: DataShareService){}

ngOnInit(){

  this.dataShare.subPoint.subscribe((res:any) => {

    this.searchInput = res;
  })

}

DialogBox(noteData:any)
{
  let dialogOpen = this.matDialog.open(UpdateNoteComponent,{

    data: noteData

  });

  dialogOpen.afterClosed().subscribe((resp:any) => {
    console.log("Dialog was closed");
  })
}

}

