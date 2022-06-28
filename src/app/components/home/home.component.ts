import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { catchError, filter, first, map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects/projects.service';
import { MailService } from '../../services/mail/mail.service';

import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';

import Typewriter from 'typewriter-effect/dist/core';

import { faPhone,faMapMarkerAlt,faLanguage,faDownload,faCalendarAlt,faFutbol,faGuitar,faEnvelope,faPaperPlane,faLaptop,faCode,faRocket, faPalette, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[MessageService, DialogService]
})
export class HomeComponent implements OnInit {

  //Use of font awesome icons
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
  faPalette = faPalette;
  faChalkboardTeacher = faChalkboardTeacher;


  screenWidth: any;
  
  isBurgerMenuClicked: boolean = false;


//variable used to store all our showcased projects
projectList : Project[];

//variable used to store the clicked projet
projectData : any = [];

//Used to initialise anchor
currentLinkNumber = 1;
currentAnchorTag ="accueil";


currentContent:number  = 0;


  // variables used for contact section
  contactForm: FormGroup;
  isContactFormSubmitted = false;
  error = false;
  success = false;
  isContactFormSubmittedAndNotErrorOnClientSide = false; 

  //variable used for show modal when click on showcased project
  ref: DynamicDialogRef;


  constructor(private route: ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder, 
    private projectsService: ProjectsService,
    private mailService: MailService, 
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService,
    private metaTagService: Meta,
    private titleService: Title, 
    @Inject(DOCUMENT) private document: Document) { }



  ngOnInit(): void {

    this.initMetaAndTitle();

    this.activeContent(this.currentContent);


    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(15)]]
    })

    this.typeWriter();

    this.getAllProject();
  }

  //Initialisation of meta and description when searching pn google
  initMetaAndTitle(){

    //Init title for SEO
    this.titleService.setTitle("Portfolio | Développeur Fullstack JS Rennes 35 - Samuel Mandeng"); 
      
    this.metaTagService.addTags([
      
      //Init  description for browser
      { name: "description", content: "J'accompagne les particuliers et les entreprises à passer le cap du digital en créant des sites ou applications web sur messure leur permettant d'atteindre leurs objectifs." },

      //For link sharing
      //Essential META Tags
      { name: "og:title", content: "SM-Digitalizer | Développeur Fullstack JS"},
      { name: "og:type", content: "website"},
      { name: "og:url", content: "https://sm-digitalizer.fr"},
      { name: "og:description", content: "J'accompagne les particuliers et les entreprises à passer le cap du digital en créant des sites ou applications web sur messure leur permettant d'atteindre leurs objectifs."},
      { name: "og:url", content: "https://sm-digitalizer.fr"},
      { name: "og:image", content: "../../../assets/img/assets/img/when-sharing-link.jpeg"},
      { name: "og:site_name", content: "SM Digitalizer"},
      { name: "twitter:card", content: "./../../assets/img/assets/img/when-sharing-link.jpeg"},
      { name: "twitter:image:alt", content: "Bureau d'un développeur web et texte incitant le lecteur à passer à l'action"},

    ])
  }

//Funtion that retrieve all showcased projects
getAllProject(){
  this.projectList = this.projectsService.initProjectsListBriefData();
}


//this function is used to redirect to the right project clicked
//For this we will verify if the given parameter is known inside our project data by the field code in all project,
//If so we call our reusable modal 
//If not we display a message error to user to let him know something wrong

showProject(param: string) {

    const projectData = this.projectsService.getProjectData(param);

    if(typeof projectData !== "undefined"){
        this.ref = this.dialogService.open(ProjectDetailComponent, {
          data: {
            projectData: projectData
          },
          baseZIndex: 10000
        });
    }
    else{
      this.messageService.add({severity:'warn', detail: "Projet en phase d'initialisation. Veuillez re-essayer plus tard."});
    }
        
}

//Function used to do the typing effect on the hero banner
typeWriter(){

  const typewriter = this.document.querySelector('#typewriter');
  new Typewriter(typewriter, {
    strings: ['Développeur Web', 'Web Designer'],
    autoStart: true,
    loop: true
  });
}


ngOnDestroy() {
  if (this.ref) {
      this.ref.close();
  }
}


//Function used in about section
//  The fucntion will set the clicked header and set the right content to display
//  We remove the active class on headers and set it to the clicked one
//  We disable display from content and only displaying the good one
activeContent(param:number){

    if(param != this.currentContent){

      this.currentContent = param;

    const headers = <NodeListOf<HTMLElement>>this.document.querySelectorAll(".profil-header");
    const contents = <NodeListOf<HTMLElement>>this.document.querySelectorAll(".profil-info");

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



// Function used in contact section 
  onSubmitContactForm(){
    this.isContactFormSubmitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    }

    this.isContactFormSubmittedAndNotErrorOnClientSide = true;
    //we send the form info to the back end in rder to send the mail
    //We display a suitable information according to if the mail is send or not
    this.mailService.sendMail(JSON.stringify(this.contactForm.value)).pipe(finalize(() => this.isContactFormSubmittedAndNotErrorOnClientSide = false),
    ).subscribe(resp =>{

      if(resp['success'] === "true"){        
        this.messageService.add({severity:'success', detail: "Message envoyé."});
        this.onReset();
      }

      else{

        this.messageService.add({severity:'error', detail: "Erreur lors de l'envoi"});

      }

    });
  }

    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }


  //Reset the form
  onReset() {
    this.isContactFormSubmitted = false;
    this.contactForm.reset();
}

  openNetwork(param: string){

    let website; 
    if(param === 'linkedin'){
      website = "https://www.linkedin.com/in/bonachisamuel";

    }
    else if(param === 'instagram'){
      website = "https://www.instagram.com/zrotof_"

    }
    else if(param == 'github'){
      website = "https://github.com/zrotof"
    }

    window.open(website, "_blank");

  }

}
