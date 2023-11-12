package sprintovi.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import sprintovi.model.Product;


public interface ProductService {
	

	Page<Product> findAll(Pageable pageable);
	
	Product	findOne(Long id);
	
	Product	save(Product product);
	
	Product	update(Product product );
	
	Product	delete (Long id);
	
	Page<Product> find (String name, Integer pageNumber);
	
	

}
