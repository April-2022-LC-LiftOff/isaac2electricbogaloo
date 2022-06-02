package org.launchcode.pandaplanner.auth.models;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
public class Pet extends AbstractEntity {

    @OneToOne(mappedBy = "pet")
    private User user;

    private String type;

    public Pet(String type) {
        this.type = type;
    }

    public Pet() {}

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
