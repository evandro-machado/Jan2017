import { Injectable } from '@angular/core';

@Injectable()
export class UploadPhotoService { 
	filesToUpload: Array<File>;

	constructor(){
		this.filesToUpload = [];
	}

	upload() {
		this.makeFileRequest("http://localhost:8080/rest/photo/upload", [], this.filesToUpload).then()
	}
}