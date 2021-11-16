import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
 
import { MailService } from '../../services/mail/mail.service';
import { faPhone, 
  faEnvelope,
faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faPhone= faPhone;
  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;

  contactForm: FormGroup;
  submitted = false;

  error = false;
  success = false;

  constructor(private fb: FormBuilder, private mailService: MailService, private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(15)]],
  
  });

  this.primengConfig.ripple = true;

  
  }

  onSubmitContactForm(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    }


    //we send the form info to the back end in rder to send the mail
    //We display a suitable information according to if the mail is send or not
    this.mailService.sendMail(JSON.stringify(this.contactForm.value)).subscribe(resp =>{

      if(resp['message'] === "success"){
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});

      }

      else{

        this.messageService.add({severity:'error', summary: 'Success', detail: 'Message Content'});

      }

    });

    this.onReset();
  }

    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }


  //Reset the form
  onReset() {
    this.submitted = false;
    this.contactForm.reset();
}

}
