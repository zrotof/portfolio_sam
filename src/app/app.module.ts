import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Sscovid19Component } from './components/sscovid19/sscovid19.component';
import { ElitesvComponent } from './components/elitesv/elitesv.component';
import { FootComponent } from './components/foot/foot.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';


import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    Sscovid19Component,
    ElitesvComponent,
    FootComponent,
    HeaderComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    DynamicDialogModule,
    ProgressSpinnerModule
  ],
  entryComponents:[ProjectDetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
