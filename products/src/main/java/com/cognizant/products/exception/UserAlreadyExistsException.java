package com.cognizant.products.exception;



import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "User is already present")
public class UserAlreadyExistsException extends Exception {

}