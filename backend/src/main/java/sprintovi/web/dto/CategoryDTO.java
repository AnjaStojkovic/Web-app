package sprintovi.web.dto;

import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;

import sprintovi.model.Category;

public class CategoryDTO {
	
	private Long id;
	 

	 private String name;


	public CategoryDTO() {
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
	 
	 


	 
}
