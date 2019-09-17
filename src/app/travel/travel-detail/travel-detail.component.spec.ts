import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@app/shared/shared.module'
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { TravelDetailComponent } from './travel-detail.component';
import { PlaceReviewComponent } from './component/place-review/place-review.component';
import { MapComponentComponent } from './component/map-component/map-component.component';
import { WeatherComponentComponent } from './component/weather-component/weather-component.component';

describe('TravelDetailComponent', () => {
  let component: TravelDetailComponent;
  let fixture: ComponentFixture<TravelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterModule.forRoot([]),
        SlickCarouselModule,
        NgbRatingModule,
        SharedModule,
        TranslateModule.forRoot(),
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyAa3G0k7RwdqwGTwp0XuYYZbyrCPoDjR2s'
        })
      ],
      declarations: [ TravelDetailComponent, MapComponentComponent, PlaceReviewComponent, WeatherComponentComponent ],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
