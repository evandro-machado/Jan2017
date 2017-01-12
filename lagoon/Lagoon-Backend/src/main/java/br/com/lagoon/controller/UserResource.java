package br.com.lagoon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.lagoon.model.User;
import br.com.lagoon.service.UserService;

@RestController
@RequestMapping("/rest")
public class UserResource {

	@Autowired
	private UserService userService;
	
	@RequestMapping("/user/users")
	public List<User> findAllUsers() {
		return userService.findAllUsers();
	}
	
	@RequestMapping(value = "/user/userName", method = RequestMethod.POST)
	public User findUserByName(@RequestBody String userName){
		return userService.findByUserName(userName);
	}
	
	@RequestMapping(value = "/user/update", method = RequestMethod.POST)
	public User updateUser(@RequestBody User user){
		return userService.save(user);
	}
}
