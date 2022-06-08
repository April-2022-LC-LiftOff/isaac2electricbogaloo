package org.launchcode.pandaplanner.auth.models.dto;


import org.launchcode.pandaplanner.auth.models.Pet;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.launchcode.pandaplanner.auth.models.User;
import javax.validation.constraints.NotNull;

public class RegisterFormDTO extends LoginFormDTO {

    private String confirmPassword;

    private String petType;

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getPetType() {
        return petType;
    }

    public void setPetType(String petType) {
        this.petType = petType;
    }
}