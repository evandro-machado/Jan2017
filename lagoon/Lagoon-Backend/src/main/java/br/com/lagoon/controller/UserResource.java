package br.com.lagoon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
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
}
