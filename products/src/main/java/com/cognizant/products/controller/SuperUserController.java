package com.cognizant.products.controller;



import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.products.model.User;
import com.cognizant.products.service.SuperUserService;

@RestController
public class SuperUserController {

	@Autowired
	SuperUserService superUserService;
	@GetMapping("/shopmanagers")
	public Set<User> getAllManagers(){
		return superUserService.getAllManagers();
	}
}
