package sprintovi.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sprintovi.model.Card;
import sprintovi.service.CardService;
import sprintovi.support.CardToCardDTO;
import sprintovi.web.dto.CardDTO;

@RestController
@RequestMapping(value = "/api/cards", produces = MediaType.APPLICATION_JSON_VALUE)
public class CardController {
	
	@Autowired
	private CardService cs;
	
	@Autowired
	private CardToCardDTO toDto;
	
	@GetMapping
    public ResponseEntity<List<CardDTO>> getAll(){
    List<Card> cards = cs.findAll();
    return new ResponseEntity<>(toDto.convert(cards), HttpStatus.OK);
    
 }

}
