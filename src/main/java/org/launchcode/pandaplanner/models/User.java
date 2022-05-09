package org.launchcode.pandaplanner.models;

import org.launchcode.pandaplanner.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Entity;
import javax.persistence.OneToOne;


@Entity
public class User extends AbstractEntity {

    private String email;
    private String password;

//    @OneToOne;
//    private Pet pet;

    //relationship annotation goes here
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


}
