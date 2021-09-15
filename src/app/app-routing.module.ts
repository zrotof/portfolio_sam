import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Sscovid19Component } from './components/sscovid19/sscovid19.component';

const routes: Routes = [
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  {path: 'accueil', component : HomeComponent},
  {path: 'a-propos', component : AboutComponent},
//  {path: 'réalisations', component : ProjectsComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'réalisations', component : ProjectsComponent},
  {path: 'sscovid', component : Sscovid19Component},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
