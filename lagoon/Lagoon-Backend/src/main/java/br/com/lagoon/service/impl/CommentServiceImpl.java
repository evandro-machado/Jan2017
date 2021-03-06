package br.com.lagoon.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.lagoon.dao.CommentDao;
import br.com.lagoon.model.Comment;
import br.com.lagoon.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentDao commentDao;
	
	@Override
	public Comment save(Comment comment) {
		return commentDao.save(comment);
	}

	@Override
	public List<Comment> findByPhotoId(Long photoId) {
		return commentDao.findByPhotoId(photoId);
	}

	@Override
	public Comment findOne(Long commentId) {
		return commentDao.findOne(commentId);
	}

}
