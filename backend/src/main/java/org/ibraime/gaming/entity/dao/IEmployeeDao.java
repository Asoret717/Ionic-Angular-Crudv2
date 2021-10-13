package org.ibraime.gaming.entity.dao;

import org.ibraime.gaming.entity.models.Employee;
import org.springframework.data.repository.CrudRepository;

public interface IEmployeeDao extends CrudRepository<Employee, Long> {

}
