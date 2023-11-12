package sprintovi.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Card {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;

	 @Column(unique = true, nullable = false)
	 private String card;
	 
	 @Column(nullable = false)
	 private String description;

	public Card() {
		super();
	}

	public Card(Long id, String card, String description) {
		super();
		this.id = id;
		this.card = card;
		this.description = description;
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
		Card other = (Card) obj;
		return Objects.equals(id, other.id);
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

	public void setText(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Card [id=" + id + ", card=" + card + ", description=" + description + "]";
	}

}
