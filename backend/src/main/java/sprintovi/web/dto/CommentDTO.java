package sprintovi.web.dto;

import javax.validation.constraints.NotBlank;

public class CommentDTO {
	
    private Long id;
	 
    @NotBlank(message = "Name field is empty.")
	private String name;
    
    private String caption;
	
	private String comment;

	public CommentDTO() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}
