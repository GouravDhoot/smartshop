package com.cognizant.products.service;



import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.products.model.User;
import com.cognizant.products.repository.UserRepository;


@Service
public class SuperUserService {

	
	@Autowired
	UserRepository userRepository;
	
	public Set<User> getAllManagers(){
		return userRepository.getAllManagers();
	}
}
