package sprintovi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sprintovi.model.Comment;
import sprintovi.repository.CommentRepository;
import sprintovi.service.CommentService;

@Service
public class JpaCommentService implements CommentService {
	
	@Autowired
	private CommentRepository cr;

	@Override
	public List<Comment> findAll() {
		// TODO Auto-generated method stub
		return cr.findAll();
	}

}
