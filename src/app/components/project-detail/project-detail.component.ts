import { Component, OnInit } from '@angular/core';

import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { ProjectsService } from 'src/app/services/projects/projects.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})


export class ProjectDetailComponent implements OnInit {

  project: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
    ) { }

  ngOnInit(): void {
    this.getProjectData();
  }

  //getting project data
  getProjectData(){
    this.project = this.config.data.projectData;
  }

  //Open the project on the browser
  goOnSscovidWebsite(link: string){
    window.open(link, "_blank");
  }
}
