package sprintovi.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import sprintovi.model.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product ,Long>{
	
	 Product findOneById(Long id);
	 
//	 @Query("SELECT p FROM Product p WHERE" +
//	            "(:categoryId = NULL OR p.category.id = :categoryId) AND " +
//	 			"(:name = NULL OR p.name LIKE CONCAT('%', LOWER(:name), '%')) AND " +
//	 			"(:description = NULL OR p.description LIKE CONCAT('%', LOWER(:description), '%'))")
	 
	 @Query("SELECT p FROM Product p WHERE " +
		       "(:name IS NULL OR LOWER(p.name) LIKE CONCAT('%', LOWER(:name), '%'))")

	 			
	
	    Page<Product> search(@Param("name") String name, 
	    					Pageable pageable); 
	 

}
