package br.com.lagoon.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.lagoon.model.Comment;

public interface CommentDao extends CrudRepository<Comment, Long>{
	
	Comment save(Comment comment);
	
	Comment findOne(Long commentId);
	
	List<Comment> findByPhotoId(Long photoId);
}
