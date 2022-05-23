package org.launchcode.pandaplanner.auth.data;

import org.launchcode.pandaplanner.auth.models.ToDo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRepository extends CrudRepository<ToDo, Integer> {
}