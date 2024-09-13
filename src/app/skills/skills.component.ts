import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

    items = [
      { src: '../../assets/angular.png', alt: 'Angular' },
      { src: '../../assets/html.png', alt: 'HTML' },
      { src: '../../assets/c++.png', alt: 'C++' },
      { src: '../../assets/css.png', alt: 'CSS' },
      { src: '../../assets/postgres.png', alt: 'Postgres' },
      { src: '../../assets/git.png', alt: 'GIT' },
      { src: '../../assets/ionic.png', alt: 'IONIC' },
      { src: '../../assets/javascript.png', alt: 'JavaScript' },
      { src: '../../assets/cisco.png', alt: 'CISCO' },
      { src: '../../assets/node.png', alt: 'Node' },
      { src: '../../assets/bootstrap.png', alt: 'Bootstrap' },
      // more items
    ];
    
    currentIndex = 0;
  
    ngOnInit(): void {}
  
    prev(): void {
      this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.items.length - 1;
    }
  
    next(): void {
      this.currentIndex = (this.currentIndex < this.items.length - 1) ? this.currentIndex + 1 : 0;
    }
  }
  
