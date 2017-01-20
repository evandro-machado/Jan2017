import { Component } from '@angular/core';
import { UploadPhotoService } from '../services/upload-photo.service';
import { AddPhotoService } from '../services/add-photo.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Photo } from '../models/photo';

@Component({
	selector: 'add-photo',
	templateUrl: './add-photo.component.html'
})
export class AddPhoto {
	newPhoto: Photo = new Photo();
	photoAdded: boolean = false;
	user: User;

	constructor (private _uploadPhotoService: UploadPhotoService, private _addPhotoService: AddPhotoService, private _userService: UserService) {}

	onSubmit() {
		this._userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
			user => {
				this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
				console.log(this.user);
				this.newPhoto.user = this.user;
				this._addPhotoService.sendPhoto(this.newPhoto).subscribe(
					data => {
						this.photoAdded = true;
						this.newPhoto = new Photo();
					},
					error => console.log(error)
				);
			},
			error => console.log(error)
		);
	}
}