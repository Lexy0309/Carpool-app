import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { Geolocation } from '@ionic-native/geolocation';
import {} from '@types/googlemaps';
 
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	
	constructor(public navCtrl: NavController, public geolocation: Geolocation) {
		
	}
	
	ionViewDidLoad() {
		let latLng = new google.maps.LatLng(20.5937, 78.9629);
		this.loadMap(latLng);
		// this.locationPage();
		/*
		this.geolocation.getCurrentPosition().then((position) => {
			let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			this.loadMap(latLng);
		}, (err) => {
			console.log(err);
		});
		*/
	}
	
	loadMap(latLng: google.maps.LatLng) {
		let mapOptions = {
			center: latLng,
			zoom: 4,
			mapTypeControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	}
	
	locationPage() {
		this.navCtrl.push(LocationPage);
  }

}
