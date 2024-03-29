package com.cognizant.products.repository;



import java.util.ArrayList;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.products.model.Product;

public interface ProductRepository extends JpaRepository<Product, String>{

	@Query("select distinct productType from Product")
	Set<Object> getProductType();
	@Query("from Product p where p.productType=?1 and p.stock>0")
	ArrayList<Product> getProducts(String productType);
	
	@Query("from Product p where p.stock>0")
	ArrayList<Product> getAllProducts();
}
