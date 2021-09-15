import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
