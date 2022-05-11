package org.launchcode.pandaplanner.data;

import org.launchcode.pandaplanner.models.ToDo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepository extends CrudRepository<ToDo, Integer> {
}