package org.launchcode.pandaplanner.auth.models;

public class Task {

    public Task(String id, String description) {
        this.id = id;
        this.description = description;
    }

    public String id;
    private String description;
    enum Status{ WIP,Complete }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
