package org.launchcode.pandaplanner.auth.models;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.HashMap;

@Entity
public class ToDo extends AbstractEntity{

    private int userId;

    @NotNull
    private String description;

    @NotNull
    private LocalDate dayToDo;

    @NotNull
    private LocalTime timeToDo;

    private boolean isCompleted;

    public ToDo () {}

    public ToDo(String description, LocalDate dayToDo, LocalTime timeToDo) {
        this.description = description;
        this.dayToDo = dayToDo;
        this.timeToDo = timeToDo;
        this.isCompleted = false;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

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

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }


    public void addPumpkins(User aUser, int howManyPumpkins) {
        aUser.setPumpkins(aUser.getPumpkins() + howManyPumpkins);
    }
}
