import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import {Http, Headers} from '@angular/http';
import {User} from '../models/user';

@Injectable()
export class PhotoService {
	constructor (private http:Http){}

	getPhotos(){
		let url = "http://localhost:8080/photo/allPhotos";
		return this.http.get(url);
	}
}



