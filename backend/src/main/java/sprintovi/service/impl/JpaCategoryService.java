package sprintovi.service.impl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sprintovi.model.Category;
import sprintovi.repository.CategoryRepository;
import sprintovi.service.CategoryService;

@Service
public class JpaCategoryService implements CategoryService {

	@Autowired
	private CategoryRepository kr;

	@Override
	public List<Category> findAll() {
		// TODO Auto-generated method stub
		return kr.findAll();
				
	}

	@Override
	public Category findOne(Long id) {
		// TODO Auto-generated method stub
		return kr.findOneById(id);
	}
	
	
}
