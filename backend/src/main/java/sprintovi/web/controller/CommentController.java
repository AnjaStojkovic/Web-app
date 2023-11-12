package sprintovi.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sprintovi.model.Comment;
import sprintovi.service.CommentService;
import sprintovi.support.CommentToCommentDTO;
import sprintovi.web.dto.CommentDTO;


@RestController
@RequestMapping(value = "/api/comments", produces = MediaType.APPLICATION_JSON_VALUE)
public class CommentController {
	
	@Autowired
	private CommentService cs;
	
	@Autowired
	private CommentToCommentDTO toDto;
	
	@GetMapping
    public ResponseEntity<List<CommentDTO>> getAll(){
    List<Comment> comments = cs.findAll();
    return new ResponseEntity<>(toDto.convert(comments), HttpStatus.OK);
    
 }

}
