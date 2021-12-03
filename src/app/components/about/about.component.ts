import { Component, HostListener, OnInit } from '@angular/core';

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
  
  posterLink = "../../../assets/img/sscovid19.png";

  currentContent:number  = 0;


  constructor() { }

  ngOnInit(): void {

    this.activeContent(this.currentContent);
  }


  //The fucntion will set the clicked header and set the right content to display
  //We remove the active class on headers and set it to the clicked one
  //We disable display from content and only displaying the good one
  activeContent(param:number){


    if(param != this.currentContent){

      this.currentContent = param;

    const headers = <NodeListOf<HTMLElement>>document.querySelectorAll(".profil-header");
    const contents = <NodeListOf<HTMLElement>>document.querySelectorAll(".profil-info");

    headers.forEach(element => {
      element.classList.remove("active-header");
    });

    contents.forEach(element =>{
      element.style.display="none";
    })


    headers[param].classList.add("active-header")


    contents[param].style.display="flex";
  
  }



  }
}
