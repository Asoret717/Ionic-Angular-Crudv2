package org.ibraime.gaming.controllers;

import java.util.List;

import org.ibraime.gaming.entity.models.Employee;
import org.ibraime.gaming.entity.services.IEmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class EmployeeController {
	@Autowired
	IEmployeeService employeeService;
	
	@GetMapping("/employee")
	public List<Employee> getAllEmployee(){
		return employeeService.getAll();
	}
	@GetMapping("/employee/{id}")
	public Employee getOne(@PathVariable(value = "id") long id){
		return employeeService.get(id);
	}
	@PostMapping("/employee")
	public void post(Employee employee){
		employeeService.post(employee);
	}
	@PutMapping("/employee/{id}")
	public void put(Employee employee, @PathVariable(value = "id") long id){
		employeeService.put(employee, id);
	}
	@DeleteMapping("/employee/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		employeeService.delete(id);
	}
}