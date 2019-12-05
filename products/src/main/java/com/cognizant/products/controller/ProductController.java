package com.cognizant.products.controller;



import java.util.ArrayList;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.products.model.Product;
import com.cognizant.products.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	ProductService productService;
	@GetMapping("/type")
	public Set<Object> getProductType(){
		return productService.getProductType();
	}
	
	@GetMapping("/{productType}")
	public ArrayList<Product> getProducts(@PathVariable String productType){
		
		
		
		
		return productService.getProducts(productType);
	}
	@GetMapping()
	public ArrayList<Product> getAllProducts(){
	return	productService.getAllProducts();
	}
	
	@GetMapping("/getproduct/{code}")
	public Product getProduct(@PathVariable("code") String code){
		return productService.getProduct(code);
	}
	
	@PutMapping("/modify")
	public Product modifyProduct(@RequestBody Product product){
		return productService.modifyProduct(product);
	}
	
	@PostMapping("/addProduct")
	public Product addProduct(@RequestBody Product product){
		return productService.addProduct(product);
	}
	
	@DeleteMapping("/delete/{code}")
	public void deleteProduct(@PathVariable String code){
		productService.deleteProduct(code);
	}
}
