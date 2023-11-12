package sprintovi.web.dto;

import javax.validation.constraints.NotBlank;

public class CardDTO {

	private Long id;
	 
	@NotBlank(message = "Card field is empty.")
	 private String card;
	
	 private String description;

	 public CardDTO() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCard() {
		return card;
	}

	public void setCard(String card) {
		this.card = card;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	 
	 
	 
	 
}
