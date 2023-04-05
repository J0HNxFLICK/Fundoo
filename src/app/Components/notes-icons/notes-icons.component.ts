import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-notes-icons',
  templateUrl: './notes-icons.component.html',
  styleUrls: ['./notes-icons.component.scss']
})
export class NotesIconsComponent {

  @Input() clickReciever:any;

  @Output() ColorEvent = new EventEmitter();

  colorData:any = [
    {code:'#F38B83'},
    {code: '#FBBC05'},
    {code: '#FEF474'},
    {code: '#CDFF90'},
    {code: '#A6FEEB'},
    {code: '#CAF1F8'},
    {code: '#AECAFB'},
    {code: '#D7AFFA'},
    {code: '#FDCFE8'},
    {code: '#E6C8A9'},
    {code: '#E9EBED'}
  ];

  constructor(private userServices:UserService, private _snackBar:MatSnackBar){}

  ColorCodeEmit(colorInfo:string)
  {
    this.ColorEvent.emit();

    let dataPack = {

      color: colorInfo,
      noteIdList: [this.clickReciever]
    }
    
    this.userServices.ColorChange(dataPack).subscribe((success:any) => {
      console.log("Success", success);
      
    },
    
    (error:any) =>
    {
      console.log(error);
      
    })
  }

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

    this.ColorEvent.emit();
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

    this.ColorEvent.emit();
  }
}
