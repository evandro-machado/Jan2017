package br.com.lagoon.service;

import java.util.List;

import br.com.lagoon.model.User;

public interface UserService {
	List<User> findAllUsers();
	
	User findByUserName(String userName);
	
	User save(User user);

}
