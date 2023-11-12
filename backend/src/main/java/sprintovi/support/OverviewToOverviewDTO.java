package sprintovi.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import sprintovi.model.Overview;
import sprintovi.web.dto.OverviewDTO;

@Component
public class OverviewToOverviewDTO implements Converter<Overview, OverviewDTO>{

	@Override
	public OverviewDTO convert(Overview o) {
		// TODO Auto-generated method stub
		OverviewDTO dto = new OverviewDTO();
		dto.setId(o.getId());
		dto.setTitle(o.getTitle());
		dto.setText(o.getText());
		
		return dto;
	
	}
	
	public List<OverviewDTO> convert(List<Overview> overviews) {
		List<OverviewDTO> result = new ArrayList<>();
		 
		for(Overview o : overviews) {
			result.add(convert(o));
		}
		return result;
	}

}
