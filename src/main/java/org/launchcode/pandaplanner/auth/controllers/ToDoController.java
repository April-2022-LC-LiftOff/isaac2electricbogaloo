package org.launchcode.pandaplanner.auth.controllers;

import org.launchcode.pandaplanner.auth.data.ToDoRepository;
import org.launchcode.pandaplanner.auth.models.ToDo;
import org.launchcode.pandaplanner.auth.models.dto.ToDoFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/")
public class ToDoController {

    @Autowired
    private ToDoRepository toDoRepository;

    @PostMapping("todo")
    public ResponseEntity<Object> createToDo(@RequestBody @Valid ToDoFormDTO toDoFormDTO, HttpServletRequest request) {

        ToDo newToDo = new ToDo(toDoFormDTO.getDescription(), toDoFormDTO.getDayToDo(), toDoFormDTO.getTimeToDo());
        toDoRepository.save(newToDo);
        return ResponseEntity.ok(newToDo);
    }




}
