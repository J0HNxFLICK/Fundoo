import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent  implements OnInit{

  notesData: any;
  constructor(private userSersives:UserService){}
  ngOnInit()
  {
    this.displayallNote()  
  }

  displayallNote()
  {
    this.userSersives.GetAllNotes().subscribe(
      
      (resp:any) => {
        
        // console.log("Response successfull" , resp);

        this.notesData = resp.data.data;
        console.log(this.notesData);

    })
  }
}
