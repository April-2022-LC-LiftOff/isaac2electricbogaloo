package org.launchcode.pandaplanner.auth.models;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
public class Pet extends AbstractEntity {

    @OneToOne(mappedBy = "pet")
    private User user;

    private String petName;

    private String type;

    public Pet(String petName, String type) {
        this.petName = petName;
        this.type = type;
    }

    public Pet() {}

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
