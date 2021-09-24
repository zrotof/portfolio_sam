import { Component, OnInit } from '@angular/core';

import { faBackward } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sscovid19',
  templateUrl: './sscovid19.component.html',
  styleUrls: ['./sscovid19.component.scss']
})
export class Sscovid19Component implements OnInit {

  faBackward = faBackward;

  posterLink = "../../../assets/img/sscovid19.png";

  constructor() { }

  ngOnInit(): void {
  }

}
