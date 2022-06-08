package org.launchcode.pandaplanner.auth.controllers;

import org.launchcode.pandaplanner.auth.data.PetRepository;
import org.launchcode.pandaplanner.auth.data.UserRepository;
import org.launchcode.pandaplanner.auth.models.Pet;
import org.launchcode.pandaplanner.auth.models.User;
import org.launchcode.pandaplanner.auth.models.dto.LoginFormDTO;
import org.launchcode.pandaplanner.auth.models.dto.RegisterFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PetRepository petRepository;

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

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

        User newUser = new User(registerFormDTO.getEmail(), registerFormDTO.getPassword(), registerFormDTO.getPetType());
        userRepository.save(newUser);

        Pet newPet = new Pet(registerFormDTO.getPetType());
        newPet.setUserId(newUser.getId());
        petRepository.save(newPet);


        //I would make a Pet here like:
        /*
        *   Pet newPet = new Pet(registerFormDTO.getPetName(), registerFormDTO.getPetType());
        *   petRepository.save(newPet);
        *
        *  I also added via comment a way to do the strings in RegisterFormDTO.Java --NM
        *
        * */
        setUserInSession(request.getSession(), newUser);
        return ResponseEntity.ok(newUser);

    }



    @PostMapping("/signin")
    public ResponseEntity<Object> processLoginForm(@RequestBody @Valid LoginFormDTO loginFormDTO,
                                   Errors errors, HttpServletRequest request) {


        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body("Has Errors");
        }

        User theUser = userRepository.findByEmail(loginFormDTO.getEmail());

        if (theUser == null) {
            errors.rejectValue("email", "user.invalid", "The given email does not exist");
            return ResponseEntity.badRequest().body("Create an account");
        }

        String password = loginFormDTO.getPassword();

        if (!theUser.isMatchingPassword(password)) {
            errors.rejectValue("password", "password.invalid", "Invalid password");
               return  ResponseEntity.badRequest().body("Password is invalid");
        }

        setUserInSession(request.getSession(), theUser);

        return ResponseEntity.ok(theUser);
   }
}