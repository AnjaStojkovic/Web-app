package sprintovi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sprintovi.model.Card;

@Repository
public interface CardRepository extends JpaRepository<Card ,Long>{

	Card findOneById(Long id);
}
