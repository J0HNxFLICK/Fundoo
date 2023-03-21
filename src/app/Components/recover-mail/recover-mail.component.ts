import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MustMatch } from '../sign-up/MatchChecker/Checker';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-recover-mail',
  templateUrl: './recover-mail.component.html',
  styleUrls: ['./recover-mail.component.scss']
})
export class RecoverMailComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[^\w\s]).{8,}$/)]],
      confirmPassword: ['', Validators.required]
    },

      {
        validators: MustMatch('password', 'confirmPassword')
      }

    );

  }

  reply() {

    if (this.registerForm.valid) {

      let data = {

        password: this.registerForm.value.password

      }

      this.userService.resetPwd(data).subscribe(
        (response) => {
          console.log("Successfully reset", response);

          this._snackBar.open("Successfully reset", "ok", { duration: 3000 });
        },
        (error) => {
          this._snackBar.open("Error " + error.status + " " + error.statusText, "try again", { duration: 3000 });
        });

      // console.log("The result is", this.registerForm.value);
      // this._snackBar.open("Registered successfully", "ok", { duration: 3000 });
    }
    else {
      console.log("Enter valid data");
      this._snackBar.open("Enter valid data", "ok", { duration: 3000 });
    }

  }

}
