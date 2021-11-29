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

    return this.httpRequest.post("https://sam-man-portfolio-backend.herokuapp.com/mail", mailInfo, headers); 
  }
}
