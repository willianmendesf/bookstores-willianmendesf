package com.willianmendesf.bookstoremanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.willianmendesf.bookstoremanager.dto.MessageResponseDTO;
import com.willianmendesf.bookstoremanager.entity.Book;
import com.willianmendesf.bookstoremanager.service.BookService;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {

	@Autowired
	private BookService bookService;
	
	@PostMapping("/new")
	public MessageResponseDTO create(@RequestBody Book book) {
		return bookService.create(book);
	}
}
