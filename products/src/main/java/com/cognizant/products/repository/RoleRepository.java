package com.cognizant.products.repository;




import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.products.model.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

}
