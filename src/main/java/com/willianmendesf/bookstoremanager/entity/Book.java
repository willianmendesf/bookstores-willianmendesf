package com.willianmendesf.bookstoremanager.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "image_url", nullable = true, unique = true)
	private String imageUrl;

	@Column(nullable = false, unique = true)
	private String name;
	
	@Column(nullable = false)
	private Integer pages;
	
	@Column(nullable = true)
	private Integer chapters;
	
	@Column(nullable = false)
	private String isbn;
	
	@Column(name = "publisher_name", nullable = false, unique = true)
	private String publisherName;

	@ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
	@JoinColumn(name = "author_id")
	private Author author;

}
