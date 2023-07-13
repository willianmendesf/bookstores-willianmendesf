package com.willianmendesf.bookstoremanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import com.willianmendesf.bookstoremanager.dto.MessageResponseDTO;
import com.willianmendesf.bookstoremanager.entity.Book;
import com.willianmendesf.bookstoremanager.repository.BookRepository;

@Service
public class BookService {
	
	@Autowired
	private BookRepository bookRepository;

	public Object List() {
		return bookRepository.findAll();
	}

	public MessageResponseDTO create(Book book) {
		Book savedBook = bookRepository.save(book);

		return MessageResponseDTO
				.builder()
					.message("book created with ID " + savedBook.getId())
						.build();
	}
}
