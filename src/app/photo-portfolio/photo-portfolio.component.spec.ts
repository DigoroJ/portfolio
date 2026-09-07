import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPortfolioComponent } from './photo-portfolio.component';

describe('PhotoPortfolioComponent', () => {
  let component: PhotoPortfolioComponent;
  let fixture: ComponentFixture<PhotoPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoPortfolioComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
