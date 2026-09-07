import { Component } from '@angular/core';
import { PhotoHomeComponent } from "../photo-home/photo-home.component";
import { PhotoPortfolioComponent } from "../photo-portfolio/photo-portfolio.component";
import { PhotoServiceComponent } from "../photo-service/photo-service.component";
import { PhotoAboutComponent } from "../photo-about/photo-about.component";
import { PhotoFooterComponent } from "../photo-footer/photo-footer.component";
import { PhotoContactComponent } from "../photo-contact/photo-contact.component";

@Component({
  selector: 'app-photography',
  imports: [PhotoHomeComponent, PhotoPortfolioComponent, PhotoServiceComponent, PhotoAboutComponent, PhotoFooterComponent, PhotoContactComponent],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css',
})
export class PhotographyComponent {
  home = true;
  portfolio = false;
  services = false;
  about = false;
  contacts = false;


  goHome() {
    this.home = true;
    this.portfolio = false;
    this.services = false;
    this.about = false;
    this.contacts = false;
  }


  goPortfolio() {
    this.home = false;
    this.portfolio = true;
    this.services = false;
    this.about = false;
    this.contacts = false;
  }


  goServices() {
    this.home = false;
    this.portfolio = false;
    this.services = true;
    this.about = false;
    this.contacts = false;
  }


  goAbout() {
    this.home = false;
    this.portfolio = false;
    this.services = false;
    this.about = true;
    this.contacts = false;
  }


  goContacts() {
    this.home = false;
    this.portfolio = false;
    this.services = false;
    this.about = false;
    this.contacts = true;
  }

}
