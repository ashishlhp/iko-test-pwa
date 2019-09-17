import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../../constant';

@Component({
  selector: 'app-place-review',
  templateUrl: './place-review.component.html',
  styleUrls: ['./place-review.component.scss']
})
export class PlaceReviewComponent implements OnInit {
  @Input() reviews: Array<Review> = [];
  /**
   * Slider config 
   */
  sliderConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: 40,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 400, settings: { slidesToShow: 1, slidesToScroll: 1, fade: true } }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
