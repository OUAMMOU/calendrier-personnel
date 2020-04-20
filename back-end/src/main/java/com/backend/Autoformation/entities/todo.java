package com.backend.Autoformation.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class todo {
	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String description;
	private Date startedDate;
	private Date targetDate;
	private boolean isDone;
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		todo other = (todo) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	public 	Long getId() {
		return id;
	}
	

	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getTargetDte() {
		return targetDate;
	}
	public void setTargetDte(Date targetDate) {
		this.targetDate = targetDate;
	}
	public boolean isDone() {
		return isDone;
	}
	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	public todo( String username, String description,Date startedDate, Date targetDate, boolean isDone) {
		super();
		this.username = username;
		this.description = description;
		this.startedDate= startedDate;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}
	protected todo() {}
	public Date getStartedDate() {
		return startedDate;
	}
	public void setStartedDate(Date startedDate) {
		this.startedDate = startedDate;
	}


}
