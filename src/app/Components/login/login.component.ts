import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private userService:UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    },);

  }

  reply() 
  {

    if(this.registerForm.valid)
    {
      let data = 
      {
        email:this.registerForm.value.email,
        password:this.registerForm.value.password
      }

      this.userService.login(data).subscribe(
        
        (response) => {
          console.log("Login successful", response);

          this._snackBar.open("Login successful", "ok", { duration: 3000 });
        },
        (error) => {
          this._snackBar.open("Error " + error.status + " " + error.statusText, "ok", { duration: 3000 });
        });
      // console.log("The result is", this.registerForm.value);
    }
    else
    {
      // console.log("Enter valid data");
      this._snackBar.open("Enter valid data", "ok", {duration:3000});
    }

  }

  
}
