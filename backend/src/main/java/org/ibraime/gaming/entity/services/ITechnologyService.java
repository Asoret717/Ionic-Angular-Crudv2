package org.ibraime.gaming.entity.services;

import java.util.List;

import org.ibraime.gaming.entity.models.Technology;

public interface ITechnologyService {
	public Technology get(long id);
	public List<Technology> getAll();
	public void post(Technology technology);
	public void put(Technology technology, long id);
	public void delete(long id);

}
