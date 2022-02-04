import { Component, OnInit } from '@angular/core';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-sscovid19',
  templateUrl: './sscovid19.component.html',
  styleUrls: ['./sscovid19.component.scss']
})
export class Sscovid19Component implements OnInit {

  faBackward = faBackward;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
  }


}
