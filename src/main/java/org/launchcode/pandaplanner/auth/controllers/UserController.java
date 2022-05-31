package org.launchcode.pandaplanner.auth.controllers;

import org.launchcode.pandaplanner.auth.data.UserRepository;
import org.launchcode.pandaplanner.auth.models.User;
import org.launchcode.pandaplanner.auth.models.dto.RegisterFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<Object> processUserForm(@RequestBody @Valid RegisterFormDTO registerFormDTO,
                                                          Errors errors, HttpServletRequest request) {

        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body("Has Errors");
        }

        User existingUser = userRepository.findByEmail(registerFormDTO.getEmail());

        if (existingUser != null) {
            return ResponseEntity.badRequest().body("Already Exists");
        }

        String password = registerFormDTO.getPassword();
        String confirmPassword = registerFormDTO.getConfirmPassword();
        if (!password.equals(confirmPassword)) {
            return ResponseEntity.badRequest().body("Password mismatch");
        }

        User newUser = new User(registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), registerFormDTO.getPassword(), registerFormDTO.getPumpkins());
        newUser.setPumpkins(10);
        userRepository.save(newUser);

        //I would make a Pet here like:
        /*
        *   Pet newPet = new Pet(registerFormDTO.getPetName(), registerFormDTO.getPetType());
        *   petRepository.save(newPet);
        *
        *  I also added via comment a way to do the strings in RegisterFormDTO.Java --NM
        *
        * */

        return ResponseEntity.ok(newUser);
    }

}