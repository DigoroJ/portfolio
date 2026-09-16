import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-photo-footer',
  imports: [],
  templateUrl: './photo-footer.component.html',
  styleUrl: './photo-footer.component.css',
})
export class PhotoFooterComponent {

  @Output() navigate = new EventEmitter<string>();

  goHome() {
    this.navigate.emit('home');
  }

  goPortfolio() {
    this.navigate.emit('portfolio');
  }

  goServices() {
    this.navigate.emit('services');
  }

  goAbout() {
    this.navigate.emit('about');
  }

  goContacts() {
    this.navigate.emit('contacts');
  }

}