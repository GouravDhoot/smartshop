package com.cognizant.products.model;



import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="bill")
public class Bill implements Serializable{

	@Id
	@Column
	int bill_id;

	@ManyToOne
	@JoinColumn
	@JsonIgnore
	private User user;

	@ManyToOne
	@JoinColumn
	private Product product;
	
	private int quantity;
	
	private Date purchase_date;



	public Bill() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Bill( Product product, int quantity, Date purchase_date) {
		super();
		
		//System.out.println(product);
		
		this.product = product;
		this.quantity = quantity;
		this.purchase_date = purchase_date;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		//System.out.println(user);
		this.user = user;
	}



	public Product getProduct() {
		return product;
	}



	public void setProduct(Product product) {
		this.product = product;
	}



	public Date getPurchase_date() {
		return purchase_date;
	}



	public void setPurchase_date(Date purchase_date) {
		this.purchase_date = purchase_date;
	}



	public int getQuantity() {
		return quantity;
	}



	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}



	@Override
	public String toString() {
		return "Bill [user=" + user + ", product=" + product + ", quantity=" + quantity + ", purchase_date="
				+ purchase_date + "]";
	}



	
	
	
}
