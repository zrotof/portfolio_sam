import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, first, map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects/projects.service';
import { MailService } from '../../services/mail/mail.service';

import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';

import Typewriter from 'typewriter-effect/dist/core';

import { faHome, faUserAlt, faSuitcase, faListAlt,faPhone,faMapMarkerAlt,faLanguage,faDownload,faCalendarAlt,faFutbol,faGuitar,faEnvelope,faPaperPlane,faLaptop,faCode,faRocket, faPalette, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[MessageService, DialogService]
})
export class HomeComponent implements OnInit {

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


//variable used to store all our projects
projectList : Project[];

//Données du projet
  projectData : any = [];


  currentLinkNumber = 1;
  currentAnchorTag ="accueil";


// variable used for about section
posterLink = "../../../assets/img/sscovid19.png";

  currentContent:number  = 0;


  // variable used for contact section
  contactForm: FormGroup;
  isContactFormSubmitted = false;
  error = false;
  success = false;
  isContactFormSubmittedAndNotErrorOnClientSide = false; 
  ref: DynamicDialogRef;


  list :any[] = []
  constructor(private route: ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder, 
    private projectsService: ProjectsService,
    private mailService: MailService, 
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    public dialogService: DialogService) { }



  ngOnInit(): void {

 //   this.redirectOnLoad();


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

//Funtions that will give us our project list

getAllProject(){
  this.projectList = this.projectsService.initProjectsListBriefData();
}


//this function is used to redirect to the right project cliccked
//For this we will vérify if the given parameter is known inside our projects,
//If so we call our reusable modal 

showProject(param: string) {

    this.list = this.projectsService.initProjectData();
    console.log(this.list)
    this.list.forEach(project =>{
      if(project[param]){
        console.log(project[param])
        this.ref = this.dialogService.open(ProjectDetailComponent, {
          data: {
            projectParam: param
          },
          baseZIndex: 10000
        });
        
      }

      else{
        //display message service
      }

    });

}


typeWriter(){

  new Typewriter('#typewriter', {
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

      if(resp['message'] === "success"){        
        this.messageService.add({severity:'success', detail: "Message envoyé."});
        this.onReset();
      }

      else{

        this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi"});
    
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
