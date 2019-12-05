package com.cognizant.products.service;



import java.sql.Date;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.products.model.Bill;
import com.cognizant.products.model.Product;
import com.cognizant.products.model.User;
import com.cognizant.products.repository.ProductRepository;
import com.cognizant.products.repository.UserRepository;

@Service
public class BillService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	ProductRepository productRepository;
	
	public void addToBill(String contact,  String productCode, String quantity)
	{
		User user = userRepository.findByContactNumber(contact);
		//System.out.println(user);
		Product product = productRepository.findById(productCode).get();
		
		Set<Bill> bills = user.getBill();
		//System.out.println(bills);
		Bill bill = new Bill();
		bill.setUser(user);
		bill.setProduct(product);
		bill.setQuantity(Integer.parseInt(quantity));
		bill.setPurchase_date(new Date(System.currentTimeMillis()));
		bills.add(bill);
		System.out.println(bills);
		user.setBill(bills);
		userRepository.save(user);
		product.setStock(product.getStock()-Integer.parseInt(quantity));
		productRepository.save(product);
		//System.out.println(product);
		//System.out.println(user.getBill());
		
	}
	
	public Set<Bill> getBillHistory(String userId){
		return userRepository.findByUsername(userId).getBill();
		
	}
}
