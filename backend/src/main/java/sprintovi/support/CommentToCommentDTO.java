package sprintovi.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import sprintovi.model.Comment;
import sprintovi.web.dto.CommentDTO;

@Component
public class CommentToCommentDTO implements Converter<Comment, CommentDTO>{

	@Override
	public CommentDTO convert(Comment c) {
		// TODO Auto-generated method stub
		CommentDTO dto = new CommentDTO();
		dto.setId(c.getId());
		dto.setName(c.getName());
		dto.setCaption(c.getCaption());
		dto.setComment(c.getComment());
		
		return dto;
	}
	
	public List<CommentDTO> convert(List<Comment> comments) {
		List<CommentDTO> result = new ArrayList<>();
		 
		for(Comment c : comments) {
			result.add(convert(c));
		}
		return result;
	}
	
	

}
