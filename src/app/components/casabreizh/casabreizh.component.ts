import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBackward } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-casabreizh',
  templateUrl: './casabreizh.component.html',
  styleUrls: ['./casabreizh.component.scss']
})
export class CasabreizhComponent implements OnInit {

  constructor( private router: Router ) { }
  posterLink = "../../../assets/img/casabreizh/casabreizh.png";

  faBackward = faBackward;

  ngOnInit(): void {
  }

  goOnProjectsList(){
    this.router.navigate(['accueil']);
  }

  goOnElitesVoyagesWebsite(){

    window.open("https://casabreizh.herokuapp.com", "_blank");
  }

}
