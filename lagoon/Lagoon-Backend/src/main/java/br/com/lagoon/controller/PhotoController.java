package br.com.lagoon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.lagoon.model.Photo;
import br.com.lagoon.service.PhotoService;

@RestController
@RequestMapping("/photo")
public class PhotoController {

	@Autowired
	private PhotoService photoService;
	
	@RequestMapping("/allPhotos")
	public List<Photo> getAllPhotos() {
		return photoService.findAll();
	}
}
