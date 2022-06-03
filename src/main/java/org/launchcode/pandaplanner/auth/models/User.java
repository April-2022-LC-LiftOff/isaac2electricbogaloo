package org.launchcode.pandaplanner.auth.models;


import org.hibernate.engine.internal.Cascade;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class User extends AbstractEntity {

    @OneToOne
    public Pet pet;
    //connects one pet objects to each instance of a user object
    //cascade makes it so if a user object is changed the pet object is changed in the same way


    @NotNull
    private String email;

    @NotNull
    private String pwHash;

    @NotNull

    @OneToOne(cascade= CascadeType.ALL)
    private Pet pet;

    private int pumpkins;

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
