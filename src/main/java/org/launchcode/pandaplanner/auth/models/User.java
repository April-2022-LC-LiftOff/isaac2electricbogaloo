package org.launchcode.pandaplanner.auth.models;

import com.sun.istack.NotNull;
import org.launchcode.pandaplanner.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;


@Entity
public class User extends AbstractEntity {

    private String email;
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @NotNull
    private Pet pet;

    @OneToOne(cascade = CascadeType.ALL)
    private ToDo todo;

    public User(String name, String email, String password) {
        super();
        this.email = email;
        this.password = password;
    }

    public User() {}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public ToDo getTodo() {
        return todo;
    }

    public void setTodo(ToDo todo) {
        this.todo = todo;
    }
}
