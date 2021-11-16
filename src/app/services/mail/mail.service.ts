import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpRequest: HttpClient) { }

  sendMail(mailInfo){

    let headers = {
      headers : new HttpHeaders({
        'Content-Type':"application/json"
      })
    };

    console.log("yes yes");
    return this.httpRequest.post("http://localhost:3000/mail", mailInfo, headers); 
  }
}
