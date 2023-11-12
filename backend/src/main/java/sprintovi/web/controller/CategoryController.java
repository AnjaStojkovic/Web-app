package sprintovi.web.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sprintovi.model.Category;
import sprintovi.service.CategoryService;
import sprintovi.support.CategorytoCategoryDto;
import sprintovi.web.dto.CategoryDTO;

@RestController
@RequestMapping(value = "/api/categories", produces = MediaType.APPLICATION_JSON_VALUE)
public class CategoryController {
	
	@Autowired
	private CategoryService cs;
	
	@Autowired
	private CategorytoCategoryDto toDto;
	
	@GetMapping
    public ResponseEntity<List<CategoryDTO>> getAll(){
    List<Category> categories = cs.findAll();
    return new ResponseEntity<>(toDto.convert(categories), HttpStatus.OK);
    
 }
	

}
