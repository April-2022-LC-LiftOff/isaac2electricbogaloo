package org.launchcode.pandaplanner.controllers;

import org.launchcode.pandaplanner.auth.data.ToDoRepository;
import org.springframework.ui.Model;

public class ToDoController {
    //method to call saved todo list
    private ToDoRepository toDoRepository;

    public String index(Model model){
        model.addAttribute("title","Todo List");
        model.addAttribute("task",)

    }





    //method save new todo to list


}
