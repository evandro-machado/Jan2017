import { Component, Input } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Photo } from '../models/photo';
import { Router } from '@angular/router';

@Component({
	selector: 'my-album',
	templateUrl: './my-album.component.html'
})
export class MyAlbum {
	private photos: Photo[];
	private user;
	private selectedPhoto: Photo;

	constructor (private _photoService: PhotoService, private _router: Router, private _userService: UserService) {
		this._userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
			user => {
				this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
				console.log(this.user);
				this._photoService.getPhotosByUser(this.user).subscribe(
					photos => {console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList)},
					error => console.log(error)
				);
			},
			error => console.log(error)
		);
	}

	onSelect(photo: Photo) {
		this.selectedPhoto = photo;
		this._router.navigate(['image-detail', this.selectedPhoto.photoId]);
	}
}