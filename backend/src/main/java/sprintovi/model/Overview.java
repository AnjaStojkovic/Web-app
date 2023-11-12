package sprintovi.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Overview {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;

	 @Column(unique = true, nullable = false)
	 private String title;
	 
	 @Column(nullable = false)
	 private String text;
	 

	public Overview() {
		super();
	}

	public Overview(Long id, String title, String text) {
		super();
		this.id = id;
		this.title = title;
		this.text = text;
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
			Overview other = (Overview) obj;
			return Objects.equals(id, other.id);
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

	@Override
	public String toString() {
		return "Overview [id=" + id + ", title=" + title + ", text=" + text + "]";
	}

}
