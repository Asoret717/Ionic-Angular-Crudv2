package org.ibraime.gaming.entity.services;

import java.util.List;

import org.ibraime.gaming.entity.models.Employee;

public interface IEmployeeService {
	public Employee get(long id);
	public List<Employee> getAll();
	public void post(Employee employee);
	public void put(Employee employee, long id);
	public void delete(long id);
}
