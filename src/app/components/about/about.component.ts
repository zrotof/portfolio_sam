import { Component, OnInit } from '@angular/core';

import { faPhone, 
  faEnvelope,
  faMapMarkerAlt,
faLanguage,
faDownload,
faCalendarAlt,
faFutbol,
faGuitar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faPhone= faPhone;
  faEnvelope = faEnvelope;
  faLanguage = faLanguage;
  faMapMarkerAlt = faMapMarkerAlt;
  faDownload = faDownload;
  faCalendarAlt = faCalendarAlt;
  faFutbol = faFutbol;
  faGuitar = faGuitar;

  constructor() { }

  ngOnInit(): void {
  }

}
