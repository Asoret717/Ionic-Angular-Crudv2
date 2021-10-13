package org.ibraime.gaming.entity.services;

import java.util.List;

import org.ibraime.gaming.entity.dao.IEmployeeDao;
import org.ibraime.gaming.entity.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements IEmployeeService{
	
	@Autowired
	private IEmployeeDao employeeDao;
	
	@Override
	public Employee get(long id) {
		return employeeDao.findById(id).get();
	}

	@Override
	public List<Employee> getAll() {
		return (List<Employee>) employeeDao.findAll();
	}

	@Override
	public void post(Employee employee) {
		employeeDao.save(employee);
	}

	@Override
	public void put(Employee employee, long id) {
		employeeDao.findById(id).ifPresent((x)->{
				employee.setId(id);
				employeeDao.save(employee);
		});
	}

	@Override
	public void delete(long id) {
		employeeDao.deleteById(id);
	}
}