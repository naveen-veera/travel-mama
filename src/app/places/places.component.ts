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
  searchText;
  category:string='';
  ngOnInit(): void {
    this.places = placesData;
  }
  setValue(cat:string):void{
    this.searchText=cat;
    console.log(this.searchText);
  }
  
}
