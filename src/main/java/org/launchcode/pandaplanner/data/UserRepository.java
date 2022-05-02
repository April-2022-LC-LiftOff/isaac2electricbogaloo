package org.launchcode.pandaplanner.data;

import org.launchcode.pandaplanner.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
}
