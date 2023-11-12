package sprintovi.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import sprintovi.model.Category;
import sprintovi.web.dto.CategoryDTO;

@Component
public class CategorytoCategoryDto implements Converter<Category, CategoryDTO>{
	
	@Override
	public CategoryDTO convert(Category c) {
		// TODO Auto-generated method stub
		
		CategoryDTO dto = new CategoryDTO();
		dto.setId(c.getId());
		dto.setName(c.getName());
		
		return dto;
		
	}
	
	
	public List<CategoryDTO> convert(List<Category> categories) {
		List<CategoryDTO> result = new ArrayList<>();
		 
		for(Category c : categories) {
			result.add(convert(c));
		}
		return result;
	}

}
