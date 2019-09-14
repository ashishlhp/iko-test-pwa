import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaceReviewComponent } from './place-review.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
describe('PlaceReviewComponent', () => {
  let component: PlaceReviewComponent;
  let fixture: ComponentFixture<PlaceReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        NgbModule,
        SlickCarouselModule
      ],
      declarations: [ PlaceReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
