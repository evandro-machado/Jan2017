import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { User } from '../models/user';
import { Photo } from '../models/photo';
import { Router } from '@angular/router';

@Component({
	selector: 'photo-list',
	templateUrl: './photo-list.component.html'
})
export class PhotoList {
	photos: Photo[];
	selectedPhoto: Photo;

	constructor (private _photoService: PhotoService, private _router: Router){
		this._photoService.getPhotos().subscribe(
				data => console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
				error => console.log(error)
		)
	}

	onSelect(photo: Photo) {
		this.selectedPhoto = photo;
		this._router.navigate(['./image-detail', this.selectedPhoto.photoId]);
	}	
}