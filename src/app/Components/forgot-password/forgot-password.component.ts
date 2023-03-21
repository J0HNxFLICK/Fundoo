import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit{

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private userService:UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    },);

  }

  reply() 
  {

    if(this.registerForm.valid)
    {

      let data = 
      {
        email:this.registerForm.value.email
      };


      this.userService.forgotPwd(data).subscribe(
        
        (response) => {
          console.log("pasword reset mail sent", response);

          this._snackBar.open("Reset link sent to mail", "ok", { duration: 3000 });
        },
        (error) => {
          this._snackBar.open("Error " + error.status + " " + error.statusText, "try again", { duration: 3000 });
        });
      // console.log("The result is", this.registerForm.value);
      // this._snackBar.open("Registered successfully", "ok", {duration:3000});
    }
    else
    {
      console.log("Enter valid data");
      this._snackBar.open("Enter valid data", "ok", {duration:3000});
    }

  }

}
