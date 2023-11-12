package sprintovi.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sprintovi.model.Overview;
import sprintovi.service.OverviewService;
import sprintovi.support.OverviewToOverviewDTO;
import sprintovi.web.dto.OverviewDTO;

@RestController
@RequestMapping(value = "/api/overviews", produces = MediaType.APPLICATION_JSON_VALUE)
public class OverviewController {
	
	@Autowired
	private OverviewService os;
	
	@Autowired
	private OverviewToOverviewDTO toDto;
	
	@GetMapping
    public ResponseEntity<List<OverviewDTO>> getAll(){
    List<Overview> overviews = os.findAll();
    return new ResponseEntity<>(toDto.convert(overviews), HttpStatus.OK);
    
 }

}
