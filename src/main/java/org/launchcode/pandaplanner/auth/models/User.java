package org.launchcode.pandaplanner.auth.models;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class User extends AbstractEntity {

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String email;

    @NotNull
    private String pwHash;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User() {}

    public User(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pwHash = encoder.encode(password);
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }


}
