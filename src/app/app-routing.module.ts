import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Sscovid19Component } from './components/sscovid19/sscovid19.component';
import { ElitesvComponent } from './components/elitesv/elitesv.component';
import { CasabreizhComponent } from './components/casabreizh/casabreizh.component';


const routes: Routes = [
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component : HomeComponent},
  { path: 'a-propos', component : AboutComponent},
  { path: 'contact', component : ContactComponent},
  { path: 'services', component : ServicesComponent},  
  { path: 'réalisations', component : ProjectsComponent,},
  { path: 'réalisations/sscovid19', component : Sscovid19Component },
  { path: 'réalisations/elites-voyages', component: ElitesvComponent},
  { path: 'réalisations/casabreizh', component: CasabreizhComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
