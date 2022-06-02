package org.launchcode.pandaplanner.auth.models.dto;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.launchcode.pandaplanner.auth.models.User;
import javax.validation.constraints.NotNull;

public class RegisterFormDTO extends LoginFormDTO {

    private String confirmPassword;


    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
