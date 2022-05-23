package org.launchcode.pandaplanner.auth.data;

import org.launchcode.pandaplanner.auth.models.Pet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetRepository extends CrudRepository<Pet, Integer> {
}
