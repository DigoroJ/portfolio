import { Component , AfterViewInit, ElementRef} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  constructor(private elementRef: ElementRef){}

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor= '#ffff';
  }
}
