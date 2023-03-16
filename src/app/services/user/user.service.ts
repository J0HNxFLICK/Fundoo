import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
