package sprintovi.support;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import sprintovi.model.Category;
import sprintovi.model.Product;
import sprintovi.web.dto.ProductDTO;



@Component
public class ProductoProductDto implements Converter<Product, ProductDTO>{
	 
	@Override
	public ProductDTO convert(Product p) {
		// TODO Auto-generated method stub
		ProductDTO dto = new ProductDTO();
		dto.setId(p.getId());
		dto.setName(p.getName());
		dto.setPrice(p.getPrice());
		dto.setAvailable(p.isAvailable());
		dto.setRating(p.getRating());
		dto.setDescription(p.getDescription());
		dto.setIngredients(p.getIngredients());
		dto.setCategoryId(p.getCategory().getId());
		dto.setCategoryName(p.getCategory().getName());
		
		return dto;
	}
	
	
	public List<ProductDTO> convert(List<Product> products) {
		List<ProductDTO> result = new ArrayList<>();
		 
		for(Product p: products	) {
			result.add(convert(p));
		}
		return result;
	}


	}
