package org.launchcode.pandaplanner.auth.models;


import org.hibernate.engine.internal.Cascade;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User extends AbstractEntity {

    @NotNull
    private String email;

    @NotNull
    private String pwHash;

    @NotNull

    @OneToOne(cascade= CascadeType.ALL)
    private Pet pet;

    private int pumpkins;

    @OneToMany(mappedBy = "description")
    private List<ToDo> toDoList = new ArrayList<>();

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User() {}


    public User( String email, String password, Pet pet) {
        this.email = email;
        this.pwHash = encoder.encode(password);
        this.pet = pet;
         this.pumpkins = 10;

    }

    public String getEmail() {
        return email;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    public int getPumpkins() {
        return pumpkins;
    }

    public void setPumpkins(int pumpkins) {
        this.pumpkins = pumpkins;
    }
}
