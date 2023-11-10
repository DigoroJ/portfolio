import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  home = true;
  about = false;
  projects = false;
  contacts = false;

  goHome(){
    this.home = true;
    this.about = false;
    this.projects = false;
    this.contacts = false;
  }

  goAbout(){
    this.home = false;
    this.about = true;
    this.projects = false;
    this.contacts = false;
  }

  goProjects(){
    this.projects = true;
    this.home = false;
    this.about = false;
    this.contacts = false;
  }

  goContacts(){
    this.contacts = true;
    this.home = false;
    this.about = false;
    this.projects = false;
  }
}
