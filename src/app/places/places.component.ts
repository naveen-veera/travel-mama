import { Component, OnInit } from '@angular/core';
import{ placeInterface } from '../placeInterface';
import{placesData} from '../placesData';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor() { }
  places:placeInterface[];
  ngOnInit(): void {
    this.places = placesData;
  }

}
