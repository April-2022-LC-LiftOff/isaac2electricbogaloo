package org.launchcode.pandaplanner.controllers;

import org.launchcode.pandaplanner.data.UserRepository;
import org.launchcode.pandaplanner.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("home")
public class PandaController {

    @Autowired
    private UserRepository userRepository;

    // this method is just for fun or testing
    // obviously it won't be part of the final app
    @GetMapping("panda")
    @ResponseBody
    public String hello() {
        return "Hello, Panda!";
    }

    @PostMapping("create")
    public String processCreateUserForm(@ModelAttribute User newUser) {
        userRepository.save(newUser);
        return "redirect:";
    }
}

//testing that I am making a new branch.
