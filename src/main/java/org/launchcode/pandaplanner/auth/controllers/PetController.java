package org.launchcode.pandaplanner.auth.controllers;

import org.launchcode.pandaplanner.auth.data.PetRepository;
import org.launchcode.pandaplanner.auth.data.ToDoRepository;
import org.launchcode.pandaplanner.auth.data.UserRepository;
import org.launchcode.pandaplanner.auth.models.Pet;
import org.launchcode.pandaplanner.auth.models.ToDo;
import org.launchcode.pandaplanner.auth.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping("/api/pet")
public class PetController {

    @Autowired
    PetRepository petRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ToDoRepository toDoRepository;

    @Autowired
    UserController userController;

    @GetMapping("")
    public ResponseEntity<Object> displayPet(HttpServletRequest request) {

        HttpSession session = request.getSession();
        User user = userController.getUserFromSession(session);

        Pet userPet = petRepository.findPetByUserId(user.getId());
        return ResponseEntity.ok(userPet);
    }
}
