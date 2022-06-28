import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { FooterComponent } from './components/footer/footer.component';


import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
