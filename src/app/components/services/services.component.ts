import { Component, OnInit } from '@angular/core';

import { faLaptop, 
  faCode,
faRocket } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  faLaptop = faLaptop;
  faCode = faCode;
  faRocket = faRocket;

  constructor() { }

  ngOnInit(): void {
  }

}
