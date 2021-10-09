import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  //redirecting to sscovid 19 component
  goOnSscovid(){
    this.router.navigate(['réalisations/sscovid19']);
  }

  //redirecting to sscovid 19 component
  goOnElites(){
    this.router.navigate(['réalisations/elites-voyages']);
  }

  //redirecting to sscovid 19 component
  goOnCasa(){
    this.router.navigate(['réalisations/casabreizh']);
  }


}
