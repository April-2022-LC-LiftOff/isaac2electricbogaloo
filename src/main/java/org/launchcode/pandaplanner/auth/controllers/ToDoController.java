package org.launchcode.pandaplanner.auth.controllers;

import org.launchcode.pandaplanner.auth.data.ToDoRepository;
import org.launchcode.pandaplanner.auth.data.UserRepository;
import org.launchcode.pandaplanner.auth.models.ToDo;
import org.launchcode.pandaplanner.auth.models.User;
import org.launchcode.pandaplanner.auth.models.dto.ToDoFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
public class ToDoController {

    @Autowired
    private ToDoRepository toDoRepository;

    @Autowired
    private UserController userController;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("todo")
    public ResponseEntity<Object> createToDo(@RequestBody @Valid ToDoFormDTO toDoFormDTO, HttpServletRequest request) {

        HttpSession session = request.getSession();
        User user = userController.getUserFromSession(session);

        ToDo newToDo = new ToDo(toDoFormDTO.getDescription(), toDoFormDTO.getDayToDo(), toDoFormDTO.getTimeToDo());
        newToDo.setUserId(user.getId());
        toDoRepository.save(newToDo);
        return ResponseEntity.ok(newToDo);
    }

    @GetMapping("todos")
    public ResponseEntity<Object> displayToDos(HttpServletRequest request) {

        HttpSession session = request.getSession();
        User user = userController.getUserFromSession(session);

        List<ToDo> allToDos = toDoRepository.findByUserId(user.getId());
        return ResponseEntity.ok(allToDos);
    }

    @PutMapping("todos/complete")
    public ResponseEntity<ToDo> completeToDo(@RequestBody ToDo toDo) {

        Optional<User> userData = userRepository.findById(toDo.getUserId());
        if(userData.isPresent()) {
             User _user = userData.get();
            _user.setPumpkins(_user.getPumpkins() + 1);

            ToDo _toDo = toDo;
            _toDo.setUserId(toDo.getUserId());
            _toDo.setDescription(toDo.getDescription());
            _toDo.setDayToDo(toDo.getDayToDo());
            _toDo.setTimeToDo(toDo.getTimeToDo());
            _toDo.setCompleted(true);
            return new ResponseEntity<>(toDoRepository.save(_toDo), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
