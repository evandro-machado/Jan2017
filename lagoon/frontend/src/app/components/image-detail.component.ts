import { Component, Input } from '@angular/core';
import { NavBar } from './nav-bar.component';
import { Photo } from '../models/photo';
import { PhotoService } from '../services/photo.service';
import { ImageComments } from '../components/image-comments.component';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'image-detail',
	templateUrl: './image-detail.component.html'
})
export class ImageDetail {
	photo: Photo = new Photo();
	like: string;
	user: User;
	photoId: number;

	constructor(private _photoService: PhotoService, private _userService: UserService, private _route: ActivatedRoute) {
		this._route.params.forEach((params: Params) => {
			this.photoId = Number.parseInt(params['id']);
		});

		this._photoService.getPhotoById(this.photoId).subscribe(
			photo => {
				this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body);
				this._userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
					user => {
						this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
						if (this.user.likedPhotoList.filter(photo => photo.photoId == this.photo.photoId)[0]){
							this.like = "Unlike";
						} else {
							this.like = "Like";
						}
					},
					error => console.log(error)
				)
			},
			error => console.log(error)
		);
	}

	goBack() {
		window.history.back();
	}

	ngOnInit() {

	}

	likeDisplay() {
		if(this.like == "Like") {
			this.like = "Unlike";
			this.user.likedPhotoList.push(this.photo);
			this.photo.likes += 1;
			this._userService.updateUser(this.user).subscribe();
			this._photoService.updatePhoto(this.photo).subscribe();
		} else {
			this.like = "Like";
			// var index = this.user.likedPhotoList.indexOf(this.photo, 0);
			for (let i = 0; i < this.user.likedPhotoList.length; i++) {
				if(this.user.likedPhotoList[i].photoId == this.photo.photoId) {
					this.user.likedPhotoList.splice(i, 1);
				}
			}
			// console.log(index);
			// if (index > -1) {
			// 	this.user.likedPhotoList.splice(index, 1);
			// }
			this.photo.likes -= 1;
			this._userService.updateUser(this.user).subscribe();
			this._photoService.updatePhoto(this.photo).subscribe();
		}
	}
}