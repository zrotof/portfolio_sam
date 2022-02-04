import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { faBackward } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-elitesv',
  templateUrl: './elitesv.component.html',
  styleUrls: ['./elitesv.component.scss']
})
export class ElitesvComponent implements OnInit {

  constructor( private router: Router ) { }
  posterLink = "../../../assets/img/ev.png";

  faBackward = faBackward;

  ngOnInit(): void {
  }
  goOnProjectsList(){
    this.router.navigate(['accueil']);
  }

  goOnElitesVoyagesWebsite(){

  }
}
