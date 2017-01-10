package br.com.lagoon.service;

import java.util.List;

import br.com.lagoon.model.Photo;
import br.com.lagoon.model.User;

public interface PhotoService {
	Photo save(Photo photo);
	
	List<Photo> findAll();
	
	List<Photo> findByUser(User user);
	
	Photo findByPhotoId(Long photoId);
}
