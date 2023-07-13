package com.willianmendesf.bookstoremanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.willianmendesf.bookstoremanager.dto.MessageResponseDTO;
import com.willianmendesf.bookstoremanager.entity.Book;
import com.willianmendesf.bookstoremanager.service.BookService;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {

	@Autowired
	private BookService bookService;

	@GetMapping("/list")
	public Object List() {
		return bookService.List();
	}

	@PostMapping("/new")
	public MessageResponseDTO create(@RequestBody Book book) {
		return bookService.create(book);
	}
}
