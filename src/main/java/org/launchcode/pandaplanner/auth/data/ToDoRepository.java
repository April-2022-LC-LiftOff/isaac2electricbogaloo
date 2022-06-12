package org.launchcode.pandaplanner.auth.data;

import org.launchcode.pandaplanner.auth.models.ToDo;
import org.launchcode.pandaplanner.auth.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToDoRepository extends CrudRepository<ToDo, Integer> {
    List<ToDo> findByUserId(int userId);
}