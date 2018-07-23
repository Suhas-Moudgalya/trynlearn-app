import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Message } from '../models/message';

const HttpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin' : '*',
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  server_url:string = "http://localhost:3000"

constructor(private http: HttpClient) { }

getMessage():Observable<Message[]>
{
var getUrl = this.server_url + "/getMessages";
return this.http.get<Message[]>(getUrl);
}

postMessage(msg:Message):Observable<Message>{
  var getUrl = this.server_url + "/postMessage";
  return this.http.post<Message>(getUrl,msg,HttpOptions);
}
  
}
