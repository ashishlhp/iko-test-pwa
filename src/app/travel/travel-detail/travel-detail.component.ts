import { Component, OnInit } from '@angular/core';
import { TravelList, Place, Review } from '../constant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss']
})
export class TravelDetailComponent implements OnInit {

  public relatedPlaces: Array<Place> = [];
  public place: Place;
  public reviews: Array<Review> = [];
  public sliderConfig = { slidesToShow: 1, slidesToScroll: 1, arrows: true, fade: true };
  private placeId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  	// Get place id from url
    this.placeId = +this.route.snapshot.paramMap.get('id');

    const index = TravelList.findIndex(x => {
      return x.id === this.placeId;
    });
    /**
     * Get related place detail & remove current open place from list.
     */
    if (index > -1) {
      this.place = TravelList[index];
      const tmpList = [...TravelList];
      tmpList.splice(index, 1);
      this.relatedPlaces = tmpList;
      this.reviews = this.place.reviews;
    }
  }
  /**
   * Handle book button click
   */
  onBook(){
    alert('Thank you for Booking !')
  }
}
