package org.ibraime.gaming.entity.services;

import java.util.List;

import org.ibraime.gaming.entity.dao.ITechnologyDao;
import org.ibraime.gaming.entity.models.Technology;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TechnologyServiceImpl implements ITechnologyService{
	
	@Autowired
	private ITechnologyDao technologyDao;
	
	@Override
	public Technology get(long id) {
		return technologyDao.findById(id).get();
	}

	@Override
	public List<Technology> getAll() {
		return (List<Technology>) technologyDao.findAll();
	}

	@Override
	public void post(Technology technology) {
		technologyDao.save(technology);
	}

	@Override
	public void put(Technology technology, long id) {
		technologyDao.findById(id).ifPresent((x)->{
				technology.setId(id);
				technologyDao.save(technology);
		});
	}

	@Override
	public void delete(long id) {
		technologyDao.deleteById(id);
	}
}
