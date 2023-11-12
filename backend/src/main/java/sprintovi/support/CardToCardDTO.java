package sprintovi.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import sprintovi.model.Card;
import sprintovi.web.dto.CardDTO;

@Component
public class CardToCardDTO implements Converter<Card, CardDTO>{

	@Override
	public CardDTO convert(Card c) {
		// TODO Auto-generated method stub
		CardDTO dto = new CardDTO();
		dto.setId(c.getId());
		dto.setCard(c.getCard());
		dto.setDescription(c.getDescription());
		
		return dto;
	}
	
	public List<CardDTO> convert(List<Card> cards) {
		List<CardDTO> result = new ArrayList<>();
		 
		for(Card c : cards) {
			result.add(convert(c));
		}
		return result;
	}

}
