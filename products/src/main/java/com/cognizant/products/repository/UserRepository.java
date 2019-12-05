package com.cognizant.products.repository;



import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.products.model.User;



public interface UserRepository extends JpaRepository<User, String> {
	@Query(value = "FROM User user where user.userId=?1")
	User findByUsername(String name);

	@Query("select u from User u join u.roleList r where r.rolename='admin' and u.status='P' or u.status='D'")
	Set<User> getAllManagers();
	
	User findByContactNumber(String contact);
}
