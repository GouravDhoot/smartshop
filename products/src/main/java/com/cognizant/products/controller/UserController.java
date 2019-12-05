package com.cognizant.products.controller;




import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.products.exception.UserAlreadyExistsException;
import com.cognizant.products.model.User;
import com.cognizant.products.repository.UserRepository;
import com.cognizant.products.service.AppUserDetailsService;



@RestController
@RequestMapping("/users")
public class UserController {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	AppUserDetailsService appUserDetailsService;
	@Autowired
	UserRepository userRepository;

	@GetMapping("/{name}")
	public UserDetails testFindByUsername(@PathVariable("name") String name) {
		return appUserDetailsService.loadUserByUsername(name);

	}

	
	@GetMapping("/a/{name}")
	public User find(@PathVariable("name") String name){
		return appUserDetailsService.find(name);
	}
	@PostMapping("/customer")
	public String signupCustomer(@RequestBody @Valid User user) throws UserAlreadyExistsException {
		LOGGER.info("in signup");
		return appUserDetailsService.signupUser(user);

	}
	@PostMapping("/manager")
	public String signupManager(@RequestBody @Valid User user) throws UserAlreadyExistsException {
		return appUserDetailsService.signupManager(user);
	}
	
	@PutMapping("/managerAuthorization")
	public void acceptedDeclined(@RequestBody @Valid User user){
		appUserDetailsService.acceptedDeclined(user);
	}
}
