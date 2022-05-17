package org.launchcode.pandaplanner.models;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import java.util.HashMap;

@Entity
public class ToDo extends AbstractEntity{

//    @OneToOne(mappedBy = "user")
//    private User user;

    private HashMap<String, String> todo;

    public ToDo(HashMap<String, String> todo) {
        super();
        this.todo = todo;
    }

    public ToDo() {}

    public HashMap<String, String> getTodo() {
        return todo;
    }

    public void setTodo(HashMap<String, String> todo) {
        this.todo = todo;
    }
}
