import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Sscovid19Component } from './components/sscovid19/sscovid19.component';
import { ElitesvComponent } from './components/elitesv/elitesv.component';
import { CasabreizhComponent } from './components/casabreizh/casabreizh.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: "enabled",
  onSameUrlNavigation: 'reload',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
