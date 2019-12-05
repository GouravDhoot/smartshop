package com.cognizant.products;

import javax.validation.constraints.AssertTrue;

import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;


import com.cognizant.products.exception.UserAlreadyExistsException;
import com.cognizant.products.model.User;
import com.cognizant.products.repository.ProductRepository;
import com.cognizant.products.repository.RoleRepository;
import com.cognizant.products.repository.UserRepository;
import com.cognizant.products.service.AppUserDetailsService;
import com.cognizant.products.service.BillService;
import com.cognizant.products.service.ProductService;
import com.cognizant.products.service.SuperUserService;

@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class ProductsApplicationTests {
	
	@Autowired
	ProductService ProductService;
	@Autowired
	BillService billService;
	@Autowired
	SuperUserService superUserService;
	@Autowired
	AppUserDetailsService appUserDetailsService;
	@Autowired
	ProductRepository productRepository;
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	UserRepository userRepository;
    @Autowired
 private MockMvc mvc;

	@Test
	public void contextLoads() {
	} 
	
	@Test
	public void testSignUp() throws UserAlreadyExistsException{
		User user = new User("zzz", "zzz", 21, "Male", "0000000000", "zzz", "pwd");
	appUserDetailsService.signupUser(user);
	
	Assert.assertTrue(userRepository.existsById("zzz"));
	}
	
	@Test
	public void testGetProduct() throws Exception{
		ResultActions resultActions = mvc.perform(get("/product/getproduct/1"));
		resultActions.andExpect(status().isOk());
		resultActions.andExpect(jsonPath("$.productName").exists());
		resultActions.andExpect(jsonPath("$.productName").value("Deo"));
	}
	
	@Test
	public void testChangeAuthorizeUser (){
		User user = userRepository.findByUsername("manager");
		user.setStatus('P');
		userRepository.save(user);
		Assert.assertEquals(user.getStatus(), userRepository.findByUsername("manager").getStatus());
	}

	@Test
	public void testGetUser(){
		Assert.assertTrue(userRepository.existsById("avcf"));
	}
	
	@Test
	public void testGetUsers() throws Exception{
		ResultActions resultActions = mvc.perform(get("/users/abcj"));
		resultActions.andExpect(status().isOk());
		
	}
}
