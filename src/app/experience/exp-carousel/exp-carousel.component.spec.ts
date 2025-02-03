import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCarouselComponent } from './exp-carousel.component';

describe('ExpCarouselComponent', () => {
  let component: ExpCarouselComponent;
  let fixture: ComponentFixture<ExpCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
