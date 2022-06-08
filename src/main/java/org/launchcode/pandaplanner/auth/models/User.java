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

    private String petType;

    private int pumpkins;


    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User() {}


    public User( String email, String password, String petType) {
        this.email = email;
        this.pwHash = encoder.encode(password);
        this.petType = petType;
        this.pumpkins = 10;

    }

    public String getEmail() {
        return email;
    }

    public String getPetType() {
        return petType;
    }

    public void setPetType(String petType) {
        this.petType = petType;
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
