package sprintovi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sprintovi.model.Overview;

@Repository
public interface OverviewRepository extends JpaRepository<Overview ,Long>{
	
	Overview findOneById(Long id);

}
