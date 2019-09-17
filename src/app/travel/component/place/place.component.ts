import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../constant';

@Component({
  selector: 'place-item',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  @Input() place: Place;
  @Input() isFromHome = false;
  constructor() {}

  ngOnInit() {}
}
