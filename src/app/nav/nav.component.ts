import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: false
})
export class NavComponent implements OnInit {

  home = true;
  about = false;
  skills = false;
  education = false;
  projects = false;
  contacts = false;

  // Mobile menu
  menuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  private resetPages(): void {
    this.home = false;
    this.about = false;
    this.skills = false;
    this.education = false;
    this.projects = false;
    this.contacts = false;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goHome(): void {
    this.resetPages();
    this.home = true;
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goAbout(): void {
    this.resetPages();
    this.about = true;
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goSkills(): void {
    this.resetPages();
    this.skills = true;
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goEducation(): void {
    this.resetPages();
    this.education = true;
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goProjects(): void {
    this.resetPages();
    this.projects = true;
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goContacts(): void {
    this.resetPages();
    this.contacts = true;
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}