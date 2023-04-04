import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-notes-icons',
  templateUrl: './notes-icons.component.html',
  styleUrls: ['./notes-icons.component.scss']
})
export class NotesIconsComponent {

  @Input() clickReciever:any;

  constructor(private userServices:UserService, private _snackBar:MatSnackBar){}

  Delete()
  {
    console.log("in delete",this.clickReciever);
    
    let payload = {

      isDeleted:true,
      noteIdList:[this.clickReciever]

    }

    this.userServices.YeetToTrash(payload).subscribe(
    (success:any)=>
    {
      this._snackBar.open("sent to trash", "ok", { duration: 3000 });
    })

    window.location.reload();
  }

  Archive()
  { 

    let load = {

      isArchived:true,
      noteIdList:[this.clickReciever]

    }

    this.userServices.YeetToArchive(load).subscribe(
    (success:any)=>
    {
      this._snackBar.open("sent to Archive", "ok", { duration: 3000 });
    })

    window.location.reload();
  }
}
