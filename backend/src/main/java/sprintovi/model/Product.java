package sprintovi.model;

import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class Product {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
	 @Column(nullable = false)
	 private String name;
	 
	 @Column
	 private double price;
	 
	 @Column(nullable = false)
	 private boolean available;
	 
	 @Column
	 private int rating;
	 
	 @Column(nullable = false)
	 private String description;
	 
	 private String ingredients;
	 
	 @ManyToOne
	 private Category category;
	 
	
	 public Product() {
		super();
	}

	 public Product(Long id, String name, double price, boolean available, int rating, String description,
			String ingredients, Category category) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.available = available;
		this.rating = rating;
		this.description = description;
		this.ingredients = ingredients;
		this.category = category;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		return Objects.equals(id, other.id);
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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
		if(category != null && !category.getProducts().contains(this)) {
			category.getProducts().add(this);
		}
	}

	@Override
	public String toString() {
		return "Pet [id=" + id + ", name=" + name + ", price=" + price + ", available=" + available + ", rating="
				+ rating + ", description=" + description + ", ingredients=" + ingredients + ", category=" + category
				+ "]";
	}

	
	 
	
	 
	 

}
