import { Component, OnInit } from '@angular/core';

import { faPhone, 
  faEnvelope,
faPaperPlane } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faPhone= faPhone;
  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;

  constructor() { }

  ngOnInit(): void {
  }

}
