package br.com.lagoon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.lagoon.model.User;
import br.com.lagoon.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
//	public String login() {}
	
	@RequestMapping (value = "/register", method = RequestMethod.POST)
	public User registerUser(@RequestBody User user){
		return userService.save(user);
	}
}
