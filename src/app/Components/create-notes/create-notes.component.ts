import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit{
  firstView : boolean=true;
  NotesDataIn!:FormGroup;

  constructor(private formBuilder: FormBuilder , private userServices: UserService) { }

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

    }

    this.NotesDataIn.reset();
    this.firstView = true;
  }
}

