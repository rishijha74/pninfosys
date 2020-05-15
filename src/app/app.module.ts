import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { WorkshopModule } from './workshop/workshop.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TrainingComponent } from './training/training.component';
import { ContactComponent } from './contact/contact.component';
import { InternregistrationComponent } from './internregistration/internregistration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    TrainingComponent,
    ContactComponent,
    InternregistrationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkshopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
