package sprintovi.web.dto;

import javax.validation.constraints.NotBlank;

public class ProductDTO {
	
	private Long id;
	 
	@NotBlank(message = "Name field is empty.")
	 private String name;
	 
	
	 private double price;
	 
	
	 private boolean available;
	 
//	 @Positive(message = "Rating must be positive number.")
	 private int rating;
	 

	 private String description;
	 
	
	 private String ingredients;
	 
	 
	 private Long categoryId;
	 
	 private String categoryName;

	public ProductDTO() {
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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getIngredients() {
		return ingredients;
	}

	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	
	
	 

}
