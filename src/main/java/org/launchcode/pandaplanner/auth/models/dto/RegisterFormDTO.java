package org.launchcode.pandaplanner.auth.models.dto;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.launchcode.pandaplanner.auth.models.User;
import javax.validation.constraints.NotNull;

public class RegisterFormDTO {

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String email;

    @NotNull
    private String password;

    private String confirmPassword;

    /*

    **Kole's ideas for Pet object: **

    @NotNull
    private String petName;

    @NotNull
    private String petType;

    and then just generate getters and setters for these.
    the function to create a pet object has also been suggested via comments in userController.Java

     */

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

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

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
