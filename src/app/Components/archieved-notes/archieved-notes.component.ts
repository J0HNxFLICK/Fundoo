import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-archieved-notes',
  templateUrl: './archieved-notes.component.html',
  styleUrls: ['./archieved-notes.component.scss']
})
export class ArchievedNotesComponent implements OnInit{

  archievedNotes:any;
  constructor(private userServices:UserService){}

  ngOnInit(): void {
      
    this.displayArchivedNote();

  }

  displayArchivedNote()
  {
    this.userServices.GetArchivedNotes().subscribe((dataIn:any)=>
    {

      this.archievedNotes = dataIn.data.data;
      

    })
  }

}
