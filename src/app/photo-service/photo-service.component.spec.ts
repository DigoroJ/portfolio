import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoServiceComponent } from './photo-service.component';

describe('PhotoServiceComponent', () => {
  let component: PhotoServiceComponent;
  let fixture: ComponentFixture<PhotoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoServiceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
