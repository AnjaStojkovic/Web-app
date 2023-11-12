package sprintovi.support;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import sprintovi.model.Product;
import sprintovi.service.CategoryService;
import sprintovi.service.ProductService;
import sprintovi.web.dto.ProductDTO;



@Component
public class ProductDtoToProduct implements Converter<ProductDTO, Product>{
	
	@Autowired
	private ProductService ps;
	
	@Autowired
	private CategoryService cs;

	@Override
	public Product convert(ProductDTO dto) {
		// TODO Auto-generated method stub
		Product p;
		if(dto.getId() == null) {
			p = new Product();
		}else {
			p= ps.findOne(dto.getId());
		}
		
		if(p != null) {
			p.setName(dto.getName());
			p.setPrice(dto.getPrice());
			p.setAvailable(dto.isAvailable());
			p.setRating(dto.getRating());
			p.setDescription(dto.getDescription());
			p.setIngredients(dto.getIngredients());
			p.setCategory(cs.findOne(dto.getCategoryId()));
		
		}
		return p;
	}
	
	
	
	

}
