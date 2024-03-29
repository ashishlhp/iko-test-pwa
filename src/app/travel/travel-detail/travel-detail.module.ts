import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { AgmCoreModule } from '@agm/core';

import { TravelDetailComponent } from './travel-detail.component';
import { TravelDetailRoutingModule } from './travel-detail-routing.module';
import { MapComponentComponent } from './component/map-component/map-component.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaceReviewComponent } from './component/place-review/place-review.component';
import { WeatherComponentComponent } from './component/weather-component/weather-component.component';

@NgModule({
  declarations: [
  	TravelDetailComponent,
  	MapComponentComponent,
  	PlaceReviewComponent,
  	WeatherComponentComponent
  ],
  imports: [
    CommonModule,
    TravelDetailRoutingModule,
    SharedModule,
    NgbRatingModule,
    SlickCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAa3G0k7RwdqwGTwp0XuYYZbyrCPoDjR2s'
    })
  ]
})
export class TravelDetailModule { }
