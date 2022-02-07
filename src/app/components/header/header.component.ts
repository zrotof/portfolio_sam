import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { faHome, 
  faUserAlt, 
  faSuitcase, 
  faListAlt,faPhone,faMapMarkerAlt,faLanguage,faDownload,faCalendarAlt,faFutbol,faGuitar,faEnvelope,faPaperPlane,faLaptop,faCode,faRocket } from '@fortawesome/free-solid-svg-icons';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  faHome = faHome;
  faUserAlt = faUserAlt;
  faSuitcase = faSuitcase; 
  faListAlt = faListAlt;
  faPhone= faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faLanguage = faLanguage;
  faDownload = faDownload;
  faCalendarAlt = faCalendarAlt;
  faFutbol = faFutbol;
  faGuitar = faGuitar;
  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;
  faLaptop = faLaptop;
  faCode = faCode;
  faRocket = faRocket;

  screenWidth: any;
  
  isBurgerMenuClicked: boolean = false;


  currentLinkNumber = 1;
  currentAnchorTag ="accueil";

  constructor(
    private router: Router) 
    { }

  ngOnInit(): void {
    
    this.redirectOnLoad();
  }

  //Handling click on burger menu
  onBurgerMenu(){
    let navSmallScreen = <HTMLElement>document.querySelector('nav');
    let inputstatus = <HTMLInputElement>document.querySelector('.burger input');
    let burgerParent = <HTMLElement>document.querySelector('.burger');
    let header = <HTMLElement>document.querySelector('header');
    // À chaque clique sur l'input on vérifie si l'input est cochée
    if(inputstatus.checked === true){
      
      navSmallScreen.classList.toggle("toggle-nav")

      if (window.pageYOffset <= header.clientHeight) {
        header.classList.add('navbar-background-on-scroll');
      }
      this.isBurgerMenuClicked = true;
      burgerParent.style.background = '#FFCC00';
    }
    else{
      navSmallScreen.classList.toggle("toggle-nav");
      this.isBurgerMenuClicked = false;

      if (window.pageYOffset <= header.clientHeight) {
        header.classList.remove('navbar-background-on-scroll');
      }
      burgerParent.style.background = 'inherit';

    }
  }


  //Handling navigation on scroll

  @HostListener('window:scroll', ['$event'])

  //Changing backgroung on scroll of header menu 
  //changing the rigth active link when scolling
  
    onWindowScroll( ) {

        let header = <HTMLElement>document.querySelector('header');
        let about = <HTMLElement>document.querySelector('.about');
        let services = <HTMLElement>document.querySelector('.services');
        let projets = <HTMLElement>document.querySelector('.projects');
        let contact = <HTMLElement>document.querySelector('.contact');
    
        if(!this.isBurgerMenuClicked){
          // Changing background of header when scroll to a height bigger than the header height
          if (window.pageYOffset > header.clientHeight) {
            header.classList.add('navbar-background-on-scroll');
          } else {
            header.classList.remove('navbar-background-on-scroll');
          }
          
          //changinthe color of link
          if(window.pageYOffset < about.offsetHeight){            
              this.setActiveLink(1);
          }
          
          if((window.pageYOffset < services.offsetTop) && window.pageYOffset >= about.offsetTop) {
              
                this.setActiveLink(2);
          }
    
          if ((window.pageYOffset < projets.offsetTop) && window.pageYOffset >= services.offsetTop) {
            this.setActiveLink(3);
          }
    
          if ((window.pageYOffset < contact.offsetTop) && window.pageYOffset >= projets.offsetTop) {
            this.setActiveLink(4);
          }  
    
          if (window.pageYOffset >= contact.offsetTop) {
            this.setActiveLink(5);
          }
        }
      }


//Redirect to the good link on load so that this link will be activated
   redirectOnLoad(){

    this.router.events.pipe(first()).subscribe( event => {
      if(event instanceof NavigationEnd){

     var nav = this.router.url

     if(nav == "/#a-propos"){
       this.currentLinkNumber = 2;
       this.currentAnchorTag = "a-propos"
     }
 
     else if(nav == "/#commandez"){
       this.currentLinkNumber = 3;
       this.currentAnchorTag = "commandez"
     }
 
     else if(nav == "/#carte"){
       this.currentLinkNumber = 4;
       this.currentAnchorTag = "carte"
     }
 
     else if(nav == "/#temoignages"){
       this.currentLinkNumber = 5;
       this.currentAnchorTag = "temoignages"
     }
 
     else if(nav == "/#contact"){
       this.currentLinkNumber = 6;
       this.currentAnchorTag = "contact"
     }


   }
   this.setActiveLinkAndNavigate(this.currentLinkNumber, this.currentAnchorTag);

  }

  )   
 }


//Setting the link 
//Toggle screen menu when on small devices 
  setActiveLinkAndNavigate(linkNumber: number, targetAnchor: string){

    this.setActiveLink(linkNumber);
    this.navigateToAnchor(targetAnchor);

  }

//Setting the active link
  setActiveLink(linkNumber: number){

    var myLinks = <NodeListOf<HTMLElement>>document.querySelectorAll("li a");
    var navSmallScreen = <HTMLElement>document.querySelector('.header-right');
    var inputstatus = <HTMLInputElement>document.querySelector('.burger input');
    
    myLinks.forEach(element =>{
      element.classList.remove("active-link");
    });

    myLinks[linkNumber - 1].classList.add("active-link");

    // À chaque clique sur l'input on vérifie si l'input est cochée
    if(inputstatus.checked === true){
      navSmallScreen.classList.toggle("toggle-nav");
      inputstatus.checked = false;
    }
  }

//Navigate to an anchor
  navigateToAnchor(targetAnchor: string){


    if(this.isBurgerMenuClicked === true){
     this.onBurgerMenu();

    }


    this.router.navigate([], { fragment: targetAnchor });
  }




}
