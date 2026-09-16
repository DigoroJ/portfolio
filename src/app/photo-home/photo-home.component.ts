import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-photo-home',
  imports: [],
  templateUrl: './photo-home.component.html',
  styleUrl: './photo-home.component.css',
})
export class PhotoHomeComponent {
   @Output() navigate = new EventEmitter<string>();

  goPortfolio() {
    this.navigate.emit('portfolio');
  }

  goContacts() {
    this.navigate.emit('contacts');
  }

  downloadPricelist(fileName: string, downloadName: string) {

  const link = document.createElement('a');

  link.href = `assets/photography/${fileName}`;
  link.download = downloadName;

  link.click();
}
}
