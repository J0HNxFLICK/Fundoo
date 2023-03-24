import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;

  constructor(private httpService:HttpService) { }

  login(reqData:any)
  {

    console.log(reqData);
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };

    return this.httpService.PostService('user/login', reqData, false, httpOptions);
  }

  signup(payload:any)
  {
    console.log(payload);
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };

    return this.httpService.PostService('user/userSignUp', payload, false, httpOptions);
  }

  forgotPwd(email:any)
  {
    console.log(email);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };

    return this.httpService.PostService('user/reset', email, false, httpOptions);
  }

  resetPwd(pwd:any)
  {
    console.log(pwd);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };

    return this.httpService.PostService('user/reset-password', pwd, false, httpOptions);
  }

  CreateNotes(NoteData:any)
  {

    this.token= localStorage.getItem("LoginId")

    console.log(NoteData);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.token
      })
    };

    return this.httpService.PostService('notes/addNotes', NoteData, true, httpOptions);

  }
}
