import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { faBackward } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-casabreizh',
  templateUrl: './casabreizh.component.html',
  styleUrls: ['./casabreizh.component.scss']
})
export class CasabreizhComponent implements OnInit {

  constructor( private router: Router ) { }
  posterLink = "../../../assets/img/casabreizh.png";

  faBackward = faBackward;

  ngOnInit(): void {
  }
  goOnProjectsList(){
    this.router.navigate(['réalisations']);
  }

  goOnElitesVoyagesWebsite(){

  }

}
