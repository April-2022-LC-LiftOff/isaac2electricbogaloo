package org.launchcode.pandaplanner.auth.controllers;

import org.launchcode.pandaplanner.auth.data.PetRepository;
import org.launchcode.pandaplanner.auth.data.ToDoRepository;
import org.launchcode.pandaplanner.auth.data.UserRepository;
import org.launchcode.pandaplanner.auth.models.Pet;
import org.launchcode.pandaplanner.auth.models.ToDo;
import org.launchcode.pandaplanner.auth.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

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

    @PutMapping("/feed")
    public ResponseEntity<Pet> feedPet(@RequestBody Pet pet, HttpServletRequest request) {

        Optional<User> userData = userRepository.findById(pet.getUserId());
        if(userData.isPresent()) {
            User _user = userData.get();
            _user.setPumpkins(_user.getPumpkins() - 1);

            Pet _pet = pet;
            _pet.setId(pet.getId());
            _pet.setUserId(pet.getUserId());
            _pet.setType(pet.getType());
            _pet.setHungerLevel(pet.getHungerLevel());
            _pet.setMood(pet.getMood());
            return new ResponseEntity<>(petRepository.save(_pet), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
