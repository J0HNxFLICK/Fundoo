import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL = "http://fundoonotes.incubation.bridgelabz.com/api/";

  constructor(private httpClient:HttpClient) { }

  PostService(url:string, reqData:any, token:boolean, httpOptions:any)
  {
    console.log(reqData);
    
    return this.httpClient.post(this.baseURL+url,reqData,token && httpOptions)
  }

  GetService(url:string, token:boolean, httpOptions:any)
  {
    return this.httpClient.get(this.baseURL+url,token && httpOptions)
  }

  PutService()
  {

  }

  DeleteService()
  {

  }
}
