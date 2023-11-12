package sprintovi.service.impl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sprintovi.model.Card;
import sprintovi.repository.CardRepository;
import sprintovi.service.CardService;

@Service
public class JpaCardService implements CardService {
	
	@Autowired
	private CardRepository cr;

	@Override
	public List<Card> findAll() {
		// TODO Auto-generated method stub
		return cr.findAll();
	}
	
	

}
