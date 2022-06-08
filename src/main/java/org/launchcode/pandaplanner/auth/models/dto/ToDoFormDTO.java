package org.launchcode.pandaplanner.auth.models.dto;

import org.launchcode.pandaplanner.auth.models.User;

import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalTime;

public class ToDoFormDTO {


    @NotNull
    private String description;

    @NotNull
    private LocalDate dayToDo;

    @NotNull
    private LocalTime timeToDo;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDayToDo() {
        return dayToDo;
    }

    public void setDayToDo(LocalDate dayToDo) {
        this.dayToDo = dayToDo;
    }

    public LocalTime getTimeToDo() {
        return timeToDo;
    }

    public void setTimeToDo(LocalTime timeToDo) {
        this.timeToDo = timeToDo;
    }

}
