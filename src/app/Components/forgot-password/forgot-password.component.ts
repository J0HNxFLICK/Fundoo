import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MustMatch } from '../sign-up/MatchChecker/Checker';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit{

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[^\w\s]).{8,}$/)]],
      confirmPassword:['', Validators.required]
    },
    
    {
      validators: MustMatch('password', 'confirmPassword')
    }
    
    );

  }

  reply() 
  {

    if(this.registerForm.valid)
    {
      console.log("The result is", this.registerForm.value);
      this._snackBar.open("Registered successfully", "ok", {duration:3000});
    }
    else
    {
      console.log("Enter valid data");
      this._snackBar.open("Enter valid data", "ok", {duration:3000});
    }

  }

}
