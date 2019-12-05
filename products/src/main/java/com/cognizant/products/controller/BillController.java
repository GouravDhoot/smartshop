package com.cognizant.products.controller;



import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.products.model.Bill;
import com.cognizant.products.service.BillService;

@RestController
@RequestMapping("/bill")
public class BillController {


	@Autowired
	BillService billService;
	
	@PostMapping("/{contact}/{productCode}/{quantity}")
	public void addToBill(@PathVariable("contact") String contact, @PathVariable("productCode") String productCode,@PathVariable("quantity") String quantity)
	{
		billService.addToBill(contact, productCode, quantity);
		//System.out.println(contact+productCode+quantity);
	}
	
	@GetMapping("/{userId}")
	public Set<Bill> getBillHistory(@PathVariable("userId") String userId){
		return billService.getBillHistory(userId);
	}
}
