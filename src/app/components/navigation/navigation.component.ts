import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, HostListener, OnInit } from '@angular/core';
import { faHome, 
         faUserAlt, 
         faSuitcase, 
         faListAlt, 
         faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  faHome = faHome;
  faUserAlt = faUserAlt;
  faSuitcase = faSuitcase;
  faListAlt = faListAlt;
  faEnvelope = faEnvelope;

  screenWidth: any;
  
  isBurgerMenuClicked: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }


  /*L'effet est désiré est qu'au clique sur le burger menu
  ->On agrandit la taille de la nav via effet de slide 
  ->on affiche les libelles du menu
  ->on affiche le copyright*/
  onBurgerMenu(){
    var navView = <HTMLElement>document.querySelector('.navigation');
    var inputstatus = <HTMLInputElement>document.querySelector('.burger input');
    var menuText = <NodeListOf<HTMLElement>>document.querySelectorAll("a span");

    // À chaque clique sur l'input on vérifie si l'input est cochée
    if(inputstatus.checked === true){
      
      navView.classList.add("toggle")
      
      menuText.forEach(element => {
        element.style.display="inline-block";
      });

      this.isBurgerMenuClicked = true;

    }
    else{
      navView.classList.remove("toggle");
      menuText.forEach(element => {
        element.style.display="none";
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth)
    var   menuText = <NodeListOf<HTMLElement>>document.querySelectorAll("a span");


    if(this.isBurgerMenuClicked){
      if(this.screenWidth > 1011){
     
        menuText.forEach(element => {
          element.style.display="inline";
        });
      }
      else{

        var inputstatus = <HTMLInputElement>document.querySelector('.burger input');

        if(inputstatus.checked === true){
          menuText.forEach(element => {
            element.style.display="inline";
          });
        }
        else{
          menuText.forEach(element => {
            element.style.display="none";
          });
        }

      }
    }
    
  }
}
