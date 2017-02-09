import { Component } from '@angular/core';
import { LoginService} from '../services/login.service';

@Component({
	selector: 'nav-bar',
	templateUrl: './nav-bar.component.html'
})
export class NavBar{
	myLocalStorage;

	constructor(private _loginService : LoginService) {
		this.myLocalStorage = localStorage;
	}

	onClick() {
		if(this._loginService.checkLogin()){
			this._loginService.logout();
		}
	}
}
