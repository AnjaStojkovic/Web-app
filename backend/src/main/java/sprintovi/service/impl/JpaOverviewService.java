package sprintovi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sprintovi.model.Overview;
import sprintovi.repository.OverviewRepository;
import sprintovi.service.OverviewService;

@Service
public class JpaOverviewService implements OverviewService {
	
	@Autowired
	private OverviewRepository or;

	@Override
	public List<Overview> findAll() {
		// TODO Auto-generated method stub
		return or.findAll();
	}
	
	

}
