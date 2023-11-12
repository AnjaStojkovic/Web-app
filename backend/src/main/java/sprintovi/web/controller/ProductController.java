package sprintovi.web.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import sprintovi.model.Product;
import sprintovi.service.CategoryService;
import sprintovi.service.ProductService;
import sprintovi.support.ProductDtoToProduct;
import sprintovi.support.ProductoProductDto;
import sprintovi.web.dto.ProductDTO;



@RestController
@RequestMapping(value = "/api/products", produces = MediaType.APPLICATION_JSON_VALUE)
//@Validated
public class ProductController {
	
	@Autowired
	private ProductService ps;
	
	@Autowired
	private ProductDtoToProduct toProduct;
	
	@Autowired
	private ProductoProductDto toDto;
	
	
	@PreAuthorize("hasAnyRole('KORISNIK', 'ADMIN')")
	 @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProductDTO> create(@Valid @RequestBody ProductDTO productDTO){
	 
		Product p = toProduct.convert(productDTO);
		 
		if(p.getCategory() == null) {
			 return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		  }
		 
		Product saved = ps.save(p);
		return new ResponseEntity<>(toDto.convert(saved), HttpStatus.CREATED);
	 
 }
	@PreAuthorize("hasAnyRole('KORISNIK', 'ADMIN')")
	@PutMapping(value= "/{id}",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProductDTO> update(@PathVariable Long id, @Valid @RequestBody ProductDTO productDTO){
		 
		Product p = toProduct.convert(productDTO);
		 
		if(!id.equals(productDTO.getId())) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		  }
		  
	
		if(p.getCategory() == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			  }
		
		Product updated = ps.update(p);
		return new ResponseEntity<>(toDto.convert(updated), HttpStatus.OK);
	 }

	@PreAuthorize("hasAnyRole('ADMIN')")
	@DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
	 
	  Product deleted = ps.delete(id);
	  
	  if(deleted != null) {
		  return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	  }else {
		  return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	  }
  }

	@GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getOne(@PathVariable Long id){
	  
	  Product p = ps.findOne(id);
	  
	  if(p != null) {
		  return new ResponseEntity<>(toDto.convert(p), HttpStatus.OK);
	  }else {
		  return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	  }
	  
  }
  
  	@GetMapping
    public ResponseEntity<List<ProductDTO>> getAll(
            @RequestParam(required=false) String name,
            @RequestParam(value = "pageNumber", defaultValue = "0") int pageNo){
	  
	  Page<Product> page = ps.find(name, pageNo);
	  
	  HttpHeaders headers = new HttpHeaders();
      headers.add("Total-Pages", Integer.toString(page.getTotalPages()));
   
	  
	  return new ResponseEntity<>(toDto.convert(page.getContent()), headers, HttpStatus.OK);
	 
  }
  
  	@ExceptionHandler(value = DataIntegrityViolationException.class)
	public ResponseEntity<Void> handle() {
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}


}
