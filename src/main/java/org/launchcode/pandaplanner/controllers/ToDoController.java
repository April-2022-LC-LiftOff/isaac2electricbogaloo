package org.launchcode.pandaplanner.controllers;

import org.launchcode.pandaplanner.data.PetRepository;
import org.launchcode.pandaplanner.data.ToDoRepository;
import org.launchcode.pandaplanner.models.AbstractEntity;
import org.launchcode.pandaplanner.models.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 8080) //Should go around CORS policy issues
@RestController
@RequestMapping("/api/ToDo")
public class ToDoController {
    @Autowired
    ToDoRepository toDoRepository;
    @PostMapping
    public AbstractEntity<?> postTodo(@RequestBody ToDo todo)
    //method to call saved todo list

    //method save new todo to list


}
