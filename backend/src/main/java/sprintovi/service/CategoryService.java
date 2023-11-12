package sprintovi.service;

import java.util.List;

import sprintovi.model.Category;

public interface CategoryService {
	
	List<Category> findAll();
	Category findOne(Long id);

}
