package sprintovi.service.impl;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import sprintovi.model.Product;
import sprintovi.repository.ProductRepository;
import sprintovi.service.ProductService;

@Service
public class JpaProductService implements ProductService {
	
	@Autowired
	private ProductRepository pr;

	@Override
	public Page<Product> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return pr.findAll(pageable);
	}

	@Override
	public Product findOne(Long id) {
		// TODO Auto-generated method stub
		return pr.findOneById(id);
	}

	@Override
	public Product save(Product pet) {
		// TODO Auto-generated method stub
		return pr.save(pet);
	}

	@Override
	public Product update(Product pet) {
		// TODO Auto-generated method stub
		return pr.save(pet);
	}

	@Override
	public Product delete(Long id) {
		// TODO Auto-generated method stub
		Optional<Product> p = pr.findById(id);
		if(p.isPresent()) {
			pr.deleteById(id);
			return p.get();
			
		}
		return null;
	}

	@Override
	public Page<Product> find(String name, Integer pageNumber) {
		// TODO Auto-generated method stub
		return pr.search(name,  PageRequest.of(pageNumber, 6));
	}
	
	

}
