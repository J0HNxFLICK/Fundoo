import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit{

  constructor(private userServices:UserService){}

  trashNotes:any;

  ngOnInit(): void {
      
    this.displayTrashNote();

  }

  displayTrashNote()
  {
    this.userServices.GetTrashNotes().subscribe((dataIn:any)=>
    {

      this.trashNotes = dataIn.data.data;
      

    })
  }

  DeleteForever(noteData:any)
  {
    let payload = {

      isDeleted:false,
      noteIdList:[noteData.id]

    }

    this.userServices.PermaDelete(payload).subscribe((suc:any) => {

      console.log("Delete forever succeded", suc);
      
    },
    
    (error:any) =>
    {
      console.log("There has been an error", error);
      
    }

    );


  }

}
