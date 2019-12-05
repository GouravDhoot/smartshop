package com.cognizant.products.model;



import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="product")
public class Product {

	@Id
	@Column(name="product_code")
	String productCode;
	@Column(name="product_name") 
	String productName;
	@Column(name="product_type")
	String productType;
	@Column(name="brand")
	String brand;
	@Column(name="quantity")
	Integer quantity;
	@Column(name="rate_per_quantity")
	Float ratePerQuantity;
	@Column(name="stock")
	Integer stock;
	@Column(name="add_date")
	Date addDate;
	@Column(name="aisle")
	String aisle;
	@Column(name="shelf")
	String shelf;
	@Column(name="date_of_manufacture")
	Date dateOfManufacture;
	@Column(name="date_of_expiry")
	Date dateOfExpiry;
	@Column(name="product_image")
	String productImage;


	@OneToMany(mappedBy="product", cascade= CascadeType.ALL, fetch=FetchType.EAGER)
	@JsonIgnore
	private Set<Bill> bill;
	
	
	public String getProductCode() {
		return productCode;
	}
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public Float getRatePerQuantity() {
		return ratePerQuantity;
	}
	public void setRatePerQuantity(Float ratePerQuantity) {
		this.ratePerQuantity = ratePerQuantity;
	}
	public Integer getStock() {
		return stock;
	}
	public void setStock(Integer stock) {
		this.stock = stock;
	}
	public Date getAddDate() {
		return addDate;
	}
	public void setAddDate(Date addDate) {
		this.addDate = addDate;
	}
	public String getAisle() {
		return aisle;
	}
	public void setAisle(String aisle) {
		this.aisle = aisle;
	}
	public String getShelf() {
		return shelf;
	}
	public void setShelf(String shelf) {
		this.shelf = shelf;
	}
	public Date getDateOfManufacture() {
		return dateOfManufacture;
	}
	public void setDateOfManufacture(Date dateOfManufacture) {
		this.dateOfManufacture = dateOfManufacture;
	}
	public Date getDateOfExpiry() {
		return dateOfExpiry;
	}
	public void setDateOfExpiry(Date dataOfExpiry) {
		this.dateOfExpiry = dataOfExpiry;
	}
	public String getProductImage() {
		return productImage;
	}
	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}
	
	public Set<Bill> getBill() {
		return bill;
	}
	public void setBill(Set<Bill> bill) {
		this.bill = bill;
	}
	@Override
	public String toString() {
		return "Product [productCode=" + productCode + ", productName=" + productName + ", productType=" + productType
				+ ", brand=" + brand + ", quantity=" + quantity + ", ratePerQuantity=" + ratePerQuantity + ", stock="
				+ stock + ", addDate=" + addDate + ", aisle=" + aisle + ", shelf=" + shelf + ", dateOfManufacture="
				+ dateOfManufacture + ", dateOfExpiry=" + dateOfExpiry + ", productImage=" + productImage + "]";
	}

	

	
	
}
