package sprintovi.web.dto;

import javax.validation.constraints.NotBlank;

public class OverviewDTO {

	private Long id;
	 
	@NotBlank(message = "Title field is empty.")
	 private String title;
	
	@NotBlank(message = "Text field is empty.")
	 private String text;

	public OverviewDTO() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
	
}
