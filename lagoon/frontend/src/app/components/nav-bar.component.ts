import { Component } from '@angular/core';
import { LoginService} from '../services/login.service';

@Component({
	selector: 'nav-bar',
	templateUrl: './nav-bar.component.html'
})
export class NavBar{
	myLocalStorage;

	constructor(private loginService : LoginService) {
		this.myLocalStorage = localStorage;
	}

	onclick() {
		if(this.loginService.checkLogin()){
			this.loginService.logout();
		}
	}
}
