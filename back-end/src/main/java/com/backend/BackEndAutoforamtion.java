package com.backend;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.backend.Autoformation.entities.AutoJpaRepository;
import com.backend.Autoformation.entities.todo;

@SpringBootApplication
public class BackEndAutoforamtion implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(BackEndAutoforamtion.class, args);
	}
	@Autowired
	private AutoJpaRepository JapMapping;
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		/*
		DateFormat df=new SimpleDateFormat("dd/MM/yyyy");
		JapMapping.save(new todo("OUAMMOU_mohamed","learn Angular",new Date(),false));
		/*
		JapMapping.save(new todo("OUAMMOU_mohamed","learn spring",new Date(),false));
		JapMapping.save(new todo("OUAMMOU_mohamed","learn backend",new Date(),false));
		*/
	}

}
