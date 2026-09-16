import { Component } from '@angular/core';

import { PhotoHomeComponent } from "../photo-home/photo-home.component";
import { PhotoPortfolioComponent } from "../photo-portfolio/photo-portfolio.component";
import { PhotoServiceComponent } from "../photo-service/photo-service.component";
import { PhotoAboutComponent } from "../photo-about/photo-about.component";
import { PhotoFooterComponent } from "../photo-footer/photo-footer.component";
import { PhotoContactComponent } from "../photo-contact/photo-contact.component";

declare var bootstrap: any;

@Component({
  selector: 'app-photography',

  imports: [
    PhotoHomeComponent,
    PhotoPortfolioComponent,
    PhotoServiceComponent,
    PhotoAboutComponent,
    PhotoFooterComponent,
    PhotoContactComponent
  ],

  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css',
})
export class PhotographyComponent {

  home = true;
  portfolio = false;
  services = false;
  about = false;
  contacts = false;


  // =========================
  // HOME
  // =========================

  goHome() {

    this.home = true;
    this.portfolio = false;
    this.services = false;
    this.about = false;
    this.contacts = false;

    this.closeMenu();
    this.scrollToTop();
  }


  // =========================
  // PORTFOLIO
  // =========================

  goPortfolio() {

    this.home = false;
    this.portfolio = true;
    this.services = false;
    this.about = false;
    this.contacts = false;

    this.closeMenu();
    this.scrollToTop();
  }


  // =========================
  // SERVICES
  // =========================

  goServices() {

    this.home = false;
    this.portfolio = false;
    this.services = true;
    this.about = false;
    this.contacts = false;

    this.closeMenu();
    this.scrollToTop();
  }


  // =========================
  // ABOUT
  // =========================

  goAbout() {

    this.home = false;
    this.portfolio = false;
    this.services = false;
    this.about = true;
    this.contacts = false;

    this.closeMenu();
    this.scrollToTop();
  }


  // =========================
  // CONTACTS
  // =========================

  goContacts() {

    this.home = false;
    this.portfolio = false;
    this.services = false;
    this.about = false;
    this.contacts = true;

    this.closeMenu();
    this.scrollToTop();
  }


  // =========================
  // SCROLL TO TOP
  // =========================

  scrollToTop() {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }


  // =========================
  // CLOSE MOBILE MENU
  // =========================

  closeMenu() {

    const navbar = document.getElementById('navbarNav');

    if (navbar && navbar.classList.contains('show')) {

      const collapse =
        bootstrap.Collapse.getInstance(navbar) ||
        new bootstrap.Collapse(navbar, {
          toggle: false
        });

      collapse.hide();
    }

  }


  // =========================
  // FOOTER NAVIGATION
  // =========================

  navigateFromFooter(section: string) {

    switch (section) {

      case 'home':
        this.goHome();
        break;

      case 'portfolio':
        this.goPortfolio();
        break;

      case 'services':
        this.goServices();
        break;

      case 'about':
        this.goAbout();
        break;

      case 'contacts':
        this.goContacts();
        break;

    }

  }

}