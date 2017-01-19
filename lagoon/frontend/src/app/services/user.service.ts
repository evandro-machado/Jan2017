import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {
	user: User[];

	constructor (private _http: Http) {}

	getUsers() {

	}

	getUserById(id: String) {

	}

	getUserByName(username: string) {
		let tokenUrl = "http://localhost:8080/rest/user/userName";
		let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token")});
		return this._http.post(tokenUrl, username, {headers: headers});
	}

	updateUser(user: User) {
		let tokenUrl1 = "http://localhost:8080/rest/user/userName";
		let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token")});
		return this._http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
	}
}