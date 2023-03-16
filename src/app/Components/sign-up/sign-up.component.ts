import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MustMatch } from './MatchChecker/Checker';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private userService:UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required , Validators.pattern(/^[A-Z][a-z]*$/)]],
      lastName: ['', [Validators.required , Validators.pattern(/^[A-Z][a-z]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[^\w\s]).{8,}$/)]],
      confirmPassword: ['', Validators.required],
    },
    
    {
      validators: MustMatch('password', 'confirmPassword')
    }
  );

    
  }

  SignUp() {

    if(this.registerForm.valid)
    {
      let data = 
      {
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password
      }

      this.userService.signup(data).subscribe((response:any)=>{
      console.log("login successful", response);  });
      // console.log("The result is", this.registerForm.value);
      this._snackBar.open("Registered successfully", "ok", {duration:3000});
    }
    else
    {
      // console.log("Enter valid data");
      this._snackBar.open("Enter valid data", "ok", {duration:3000});
    }
    
  }

  ShowPWD()
  {
    const check = document.getElementsByClassName("PasswordType");
  
    for (let i = 0; i < check.length; i++) 
    {

      const input = check.item(i) as HTMLInputElement;
      
      if (input.type === "password") 
      {
        input.type = "text";
      } 
      else 
      {
        input.type = "password";
      }
    }
  }
  
}
