import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
   // Google map lat-long
  lat: number = 4.985426;
  lng: number = -75.604948;

  constructor() { }

  ngOnInit() {
  }

}
