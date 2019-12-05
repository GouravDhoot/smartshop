package com.cognizant.products.service;





import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.products.exception.UserAlreadyExistsException;
import com.cognizant.products.model.AppUser;
import com.cognizant.products.model.Role;
import com.cognizant.products.model.User;
import com.cognizant.products.repository.RoleRepository;
import com.cognizant.products.repository.UserRepository;







@Service
public class AppUserDetailsService implements UserDetailsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);

	@Autowired
	UserRepository userRepository;
	@Autowired
	RoleRepository roleRepository;
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("user not present");
		} 
		else if (user.getStatus()=='P') {
			throw new UsernameNotFoundException("USer Not Authorized");
		}
		else {
			AppUser appUser = new AppUser(user);
			return appUser;
		}
	
	}
	
	public User find(String name){
		System.out.println(name);
		return userRepository.findByUsername(name);
	}

	public String signupUser(User user) throws UserAlreadyExistsException {
	User user1 = userRepository.findByUsername(user.getUserId());
	LOGGER.debug("in signup1111");
		if (user1 != null ) {
			throw new UserAlreadyExistsException();
			//return "false";

		} else {
			LOGGER.debug("in else");
			Set<Role> roleList = new HashSet<>();
			roleList.add(roleRepository.findById(1).get());
			user.setRoleList(roleList);
			user.setStatus('A');
			user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
			userRepository.save(user);
			return "true";
		}
	}

	public String signupManager(User user) {
		User user1 = userRepository.findByUsername(user.getUserId());
		if (user1 != null) {
			// throw new UserAlreadyExistsException();
			return "false";

		} else {
			Set<Role> roleList = new HashSet<>();
			roleList.add(roleRepository.findById(2).get());
			user.setRoleList(roleList);
			user.setStatus('P');
			user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
			userRepository.save(user);
			return "true";
		}
	}
	
	public void acceptedDeclined(User user) {
		 userRepository.save(user);
	}
}
