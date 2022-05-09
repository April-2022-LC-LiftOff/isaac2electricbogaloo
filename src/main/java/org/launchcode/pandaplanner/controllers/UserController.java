package org.launchcode.pandaplanner.controllers;

import org.launchcode.pandaplanner.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

}

//do we need this or is PandaController fine?