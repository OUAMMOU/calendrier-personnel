package com.backend.Autoformation.entities;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
public interface AutoJpaRepository extends JpaRepository<todo, Long>{

	List<todo> findByUsername(String username);
	
}
