import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoContactComponent } from './photo-contact.component';

describe('PhotoContactComponent', () => {
  let component: PhotoContactComponent;
  let fixture: ComponentFixture<PhotoContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoContactComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
