package org.launchcode.pandaplanner.controllers;

import org.launchcode.pandaplanner.data.UserRepository;
import org.launchcode.pandaplanner.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("home")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("create")
    public String processCreateUserForm(@ModelAttribute User newUser) {
        userRepository.save(newUser);
        return "redirect:";
    }
}